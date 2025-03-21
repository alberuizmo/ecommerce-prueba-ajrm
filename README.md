# Ecommerce Monorepo AJRM

Este es un monorepo para la aplicación **Ecommerce AJRM**, construido con **React**, **TypeScript** y **Vite**. Se utilizan **Vitest** para pruebas unitarias, **TailwindCSS** para los estilos y **fetch** para realizar llamadas a la API de países.

## 📁 Estructura del Monorepo

El monorepo contiene los siguientes paquetes:

### `applications/ecommerce-ajrm`

Aplicación principal del ecommerce.

- Se creó con **React + TypeScript + Vite**.
- Usa **TailwindCSS** para los estilos.
- Realiza llamadas a una API de países utilizando `fetch`.
- Contiene un flujo de autenticación básico donde el usuario debe ingresar su nombre y seleccionar el tipo de usuario con el que desea acceder.
- Se incluyen pruebas unitarias con **Vitest**.
- Soporta **Storybook** para documentación de componentes.
- Manejo de estado con **Zustand**.

### `packages/ecommerce-utils-ajrm`

Librería compartida utilizada en la aplicación ecommerce.

- Desplegada como paquete en **npm**.
- Contiene funciones utilizadas en varias secciones de la aplicación.
- Incluye un **Toast** reutilizable.

## 🚀 Instalación y Configuración

Para instalar las dependencias del monorepo, usa **pnpm**:

```sh
pnpm install
```

## 📜 Scripts Disponibles

El monorepo utiliza `pnpm workspaces` para administrar paquetes. A continuación, se presentan los comandos más importantes:

### 📦 Aplicación Ecommerce AJRM

- **Desarrollo**
  ```sh
  pnpm dev:ecommerce-ajrm
  ```
- **Build**
  ```sh
  pnpm build:ecommerce-ajrm
  ```
- **Lint**
  ```sh
  pnpm lint:ecommerce-ajrm
  ```
- **Tests**
  ```sh
  pnpm test:ecommerce-ajrm
  ```
- **Storybook**
  ```sh
  pnpm storybook:ecommerce-ajrm
  ```

### 📚 Librería Ecommerce Utils

- **Build**
  ```sh
  pnpm build:ecommerce-utils
  ```
- **Publicar nueva versión**
  ```sh
  pnpm release:ecommerce-utils
  ```

## 🛠 Herramientas Utilizadas

- **React** + **TypeScript** + **Vite**
- **TailwindCSS**
- **Zustand** (manejo de estado)
- **Vitest** (pruebas unitarias)
- **Storybook** (documentación de componentes)
- **PNPM** (gestión de paquetes)
- **Lefthook** (gestión de hooks de git)

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

