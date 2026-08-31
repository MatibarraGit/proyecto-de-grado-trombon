# El Trombón en el Folclor Colombiano

Sitio web bilingüe que acompaña un proyecto de grado en música, dedicado a documentar el aporte del trombón al repertorio del folclor colombiano.

El sitio recorre la historia del instrumento en Colombia, analiza su rol en cuatro ritmos tradicionales —cumbia, currulao, pasillo y joropo—, y presenta la obra original del proyecto: una suite en tres movimientos (*Confusión*, *Conciencia* y *Renacer*) con partituras y audio.

**Investigación y obra musical:** Cristian Rios
**Desarrollo web:** Matías Ibarra

🔗 Demo: https://cristiantrombonista.netlify.app

---

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | Next.js 15 (App Router), React 19, TypeScript |
| Estilos | Tailwind CSS, shadcn/ui, Radix UI |
| CMS | Strapi 5 (headless, Strapi Cloud) |
| Deploy | Netlify |

## Decisiones de arquitectura

Las partes del proyecto que resolvieron un problema concreto:

**Renderizado híbrido.** Todas las páginas de contenido se pre-renderizan en build time como estáticas. La única excepción es `/galeria`, marcada `force-dynamic` porque su contenido se administra desde Strapi y cambia sin necesidad de un redeploy.

**Capa de datos server-only.** El acceso a Strapi vive en [`client/src/lib/strapi.ts`](client/src/lib/strapi.ts) bajo `"use server"`. El token de API se inyecta en el fetch del servidor y nunca llega al bundle del cliente.

**Reintentos con backoff exponencial.** El plan gratuito de Strapi suspende la instancia cuando no recibe tráfico, así que la primera petición tras un período de inactividad suele fallar o cortar por timeout mientras el servidor despierta. La capa de consulta distingue errores transitorios (5xx, 429) de permanentes (400, 401, 404) y solo reintenta los primeros, con un máximo de 3 intentos. El usuario ve un skeleton en vez de un error.

**Internacionalización con middleware propio.** Sin librerías externas: un [`middleware.ts`](client/src/middleware.ts) resuelve el locale a partir del `Accept-Language` y del `referer`, y redirige a `/es` o `/en`. Los diccionarios son JSON planos y las rutas se generan con `generateStaticParams`.

## Estructura

```
├── client/          # Next.js — sitio público
│   ├── src/app/[locale]/    # Rutas internacionalizadas (es | en)
│   ├── src/components/      # Componentes de UI
│   ├── src/lib/             # Capa de datos y utilidades
│   └── src/app/i18n/        # Diccionarios es/en
└── backend/         # Strapi — CMS de la galería
    ├── config/
    └── src/api/gallery/     # Content-type de la galería
```

## Desarrollo local

Requiere Node.js 18–22 y pnpm.

### Backend (Strapi)

```bash
cd backend
pnpm install
```

Creá un `.env` a partir de [`backend/.env.example`](backend/.env.example) y completá los secretos. Podés generar cada valor con:

```bash
openssl rand -base64 32
```

```bash
pnpm develop
```

El panel de administración queda en `http://localhost:1337/admin`.

### Frontend (Next.js)

```bash
cd client
pnpm install
```

Creá un `client/.env` con:

```bash
STRAPI_HOST=http://localhost:1337
STRAPI_TOKEN=<token generado en Strapi: Settings → API Tokens>
```

Generá el token con permisos **Read-only**: el cliente solo hace peticiones `GET`.

```bash
pnpm dev
```

Disponible en `http://localhost:3000`.

## Variables de entorno

| Variable | Dónde | Descripción |
|---|---|---|
| `STRAPI_HOST` | client | URL base de la instancia de Strapi |
| `STRAPI_TOKEN` | client | Token de API de Strapi (read-only) |
| `NEXT_PUBLIC_SITE_URL` | client | URL pública del sitio, para metadata y Open Graph |
| `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`, `ENCRYPTION_KEY` | backend | Secretos de Strapi |
| `DATABASE_*` | backend | Conexión a la base de datos (SQLite por defecto) |

Ningún `.env` se versiona. El frontend lee sus secretos únicamente del lado del servidor.

## Licencia

El código se publica con fines de portafolio. Los contenidos musicales, partituras, grabaciones y textos de investigación son propiedad de sus autores y no se licencian para reutilización.
