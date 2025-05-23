# TCIT - Backend

<p align="center">
  <img src="./logo.webp" alt="Logo TCIT" width="300"/>
</p>

## 🧰 Tecnologías principales

- **Node.js** — entorno de ejecución
- **Express.js** — framework para construir APIs
- **TypeScript** — lenguaje tipado
- **PostgreSQL** — base de datos relacional
- **Prisma** — ORM moderno y tipado
- **Dotenv** — gestión de variables de entorno
- **Prettier** — formateador de código
- **Swagger** - Documentación del proyecto

## 🧩 Requisitos

Este proyecto fue desarrollado con la versión:

```bash
Node.js v22.15.0
```

Se recomienda utilizar [Volta](https://volta.sh) o [nvm](https://github.com/nvm-sh/nvm) para gestionar versiones de Node.

## 📁 Estructura del proyecto

```

.
├── prisma/ # Esquema y migraciones de Prisma
├── src/
│ ├── generated/ # Código generado automáticamente (e.g. Prisma client)
│ ├── routers/ # Definición de rutas de la API
│ ├── services/ # Lógica de negocio y acceso a datos
│ ├── utils/ # Funciones utilitarias
│ ├── enum.ts # Enumeraciones compartidas
│ ├── index.ts # Punto de entrada principal de la app
│ └── type.d.ts # Tipados globales
├── .env.example # Variables de entorno de ejemplo
├── .gitignore # Archivos ignorados del git
├── .nvmrc # Version de node
├── .prettierrc # Configuración de formateador de código
├── package.json
├── tsconfig.json
└── README.md

```

## ⚙️ Instalación y configuración

1. Clona el repositorio:

```bash
git clone https://github.com/jonathanleivag/tcit-backend.git
cd tcit-backend
```

2. Instala las dependencias:

```bash
npm i
```

3. Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

#### 📄 Variables de entorno

Debes crear un archivo `.env` en la raíz del proyecto. Puedes usar `.env.example` como plantilla.

##### Variables necesarias:

```env
DATABASE_URL="<your_database_url>"
PORT="<your_port>"
SERVER_URL="<your_server_url>"

```

- `DATABASE_URL`: la URL de conexión a tu base de datos PostgreSQL, ejemplo postgresql://neondb_owner:**\*\***\*\*\*\***\*\***@ep-red-dawn-a40v2ej4-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require.
- `PORT`: el puerto en el que se ejecutará el servidor de Node.js, recomendación dejarlo 3000.
- `SERVER_URL`: URL del servidor ejemplo: http://localhost:3001.

4. Inicializa la base de datos con Prisma:

```bash
npx prisma migrate dev --name TCIT
```

5. Levantar el servidor:

```bash
npm run dev
```

## 🚀 Scripts disponibles

- `npm run dev` — Ejecuta el servidor en desarrollo con hot reload
- `npm run build` — Compila TypeScript a JavaScript
- `npm start` — Ejecuta el servidor en producción

## 🧪 Endpoints y documentación

La documentación Swagger está disponible en:

```
{SERVER_URL}/api-docs
```

## Notas importantes

- SERVER_URL es la misma url colocada en la variable de entorno (.env)

La documentación se genera automáticamente usando `swagger-jsdoc` y `swagger-ui-express`.

---

🔗 [Repositorio del Frontend](https://github.com/jonathanleivag/tcit-frontend.git)
