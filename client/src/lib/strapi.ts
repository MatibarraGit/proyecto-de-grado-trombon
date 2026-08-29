"use server"
const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

const MAX_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 400;
const REQUEST_TIMEOUT_MS = 10_000;

//  Error de Strapi que no tiene sentido reintentar (400, 401, 404...)
class PermanentQueryError extends Error {}
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Consulta la API de Strapi reintentando los fallos transitorios.
 *
 * El plan gratuito de Strapi suspende la instancia cuando no recibe trafico,
 * asi que la primera peticion despues de un rato puede fallar o cortar por
 * timeout mientras el servidor despierta. Con un par de reintentos con backoff
 * la segunda o tercera ya responde y el usuario no ve ningun error.
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
        cache: 'no-store',
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
      if (error instanceof PermanentQueryError) throw error;

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
