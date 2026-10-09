import 'server-only'
const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

const isBuild = process.env.NEXT_PHASE === 'phase-production-build';
const MAX_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 400;
const REQUEST_TIMEOUT_MS = isBuild ? 60_000 : 10_000;

//  Error de Strapi que no tiene sentido reintentar (400, 401, 404...)
//  la instancia esta despierta y respondio, pero la peticion es invalida.
class PermanentQueryError extends Error {}
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Consulta la API de Strapi reintentando los fallos transitorios.
 *
 * Strapi esta desplegado en el plan gratuito de Render, que suspende la
 * instancia cuando no recibe trafico. La primera peticion despues de un rato
 * puede fallar (502/503) o cortar por timeout mientras Render despierta el
 * servidor. Como el arranque sigue en marcha aunque la peticion se corte,
 * basta con volver a ejecutar la consulta tras una espera con backoff
 * exponencial: cuando Render ya esta despierto, el reintento responde bien y
 * el usuario no ve ningun error.
 */
export async function query(url: string) {
  if (!STRAPI_HOST) {
    throw new Error('STRAPI_HOST no esta definido en las variables de entorno.');
  }

  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
        method: 'GET',
        cache: 'force-cache',
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });

      if (!res.ok) {
        const body = await res.text().catch(() => '');
        const message = `Strapi respondio ${res.status} ${res.statusText} en /api/${url}. ${body.slice(0, 300)}`;
        // 429 y 5xx son transitorios (rate limit / instancia despertando).
        if (res.status >= 500 || res.status === 429) {
          throw new Error(message);
        }
        throw new PermanentQueryError(message);
      }

      return await res.json();
    } catch (error) {
      // Los errores permanentes no se reintentan: Render ya esta despierto.
      if (error instanceof PermanentQueryError) throw error;

      // Fallo transitorio (timeout, error de red, 5xx, 429): probablemente render todavia esta despertando. Se espera y se vuelve a ejecutar.
      lastError = error;
      const isLastAttempt = attempt === MAX_ATTEMPTS;
      console.warn(
        `[strapi] Intento ${attempt}/${MAX_ATTEMPTS} fallido para /api/${url}:`,
        error instanceof Error ? error.message : error
      );
      if (isLastAttempt) break;

      await wait(RETRY_BASE_DELAY_MS * 2 ** (attempt - 1));
    }
  }

  throw new Error(
    `No se pudo obtener /api/${url} tras ${MAX_ATTEMPTS} intentos: ${
      lastError instanceof Error ? lastError.message : String(lastError)
    }`
  );
}
