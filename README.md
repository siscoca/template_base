MANUAL
Guía de Instalación y Ejecución del Proyecto (SisCoca UI)
Este proyecto utiliza Vite con React y TypeScript. Para la gestión de paquetes se utiliza pnpm (que es más rápido y eficiente que npm).

Como ya tienes npm instalado, sigue estos pasos:

Instalar el gestor de paquetes (pnpm)
El proyecto está configurado para usar pnpm. Instálalo globalmente usando tu npm actual:

bash
npm install -g pnpm
(Si estás en Mac/Linux y te da error de permisos, usa sudo npm install -g pnpm).

Ubicarse en el proyecto
Abre tu terminal o línea de comandos y navega hasta la carpeta raíz del proyecto (donde se encuentra el archivo package.json):

bash
cd ui-plantilla
Instalar dependencias
Ejecuta el siguiente comando para descargar todas las librerías necesarias (React, Tailwind, Shadcn UI, etc.):

bash
pnpm install
Ejecutar el servidor de desarrollo
Para iniciar el proyecto en modo local:

bash
pnpm dev
Una vez ejecutado, verás en la terminal una dirección local, usualmente: http://localhost:5173/
