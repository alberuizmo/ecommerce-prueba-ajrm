# ECommerce App

## Descripción
ECommerce App es una aplicación web desarrollada con React, Vite y TypeScript, que permite a los usuarios registrarse como clientes o administradores. Los clientes pueden agregar productos al carrito, modificar cantidades, ingresar datos de facturación y completar compras. Los administradores pueden visualizar las facturas generadas. El stock de los productos se gestiona mediante LocalStorage.

## Tecnologías utilizadas
- **React**: Biblioteca para la construcción de la interfaz de usuario.
- **Vite**: Herramienta para el desarrollo rápido de aplicaciones React.
- **TypeScript**: Tipado estático para mayor seguridad y mantenibilidad.
- **Zustand**: Manejo de estado global ligero y eficiente.
- **LocalStorage**: Almacenamiento de datos persistente en el navegador.

## Instalación y ejecución
1. Clona este repositorio:
   ```sh
   git clone https://github.com/EcardosoGL/ecommerce-app
   ```
2. Ingresa al directorio del proyecto:
   ```sh
   cd ecommerce-app
   ```
3. Instala las dependencias:
   ```sh
   pnpm install
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   pnpm run dev:ecommerce
   ```
5. Accede a la aplicación en tu navegador en:
   ```
   http://localhost:5173
   ```

## Funcionalidades
### Cliente:
- Iniciar sesión como cliente.
- Agregar productos al carrito.
- Modificar cantidades en el checkout.
- Ingresar datos de facturación y completar la compra.

### Administrador:
- Iniciar sesión como administrador.
- Visualizar facturas generadas.

## Gestión del estado
El estado de la aplicación se maneja con **Zustand**, permitiendo una gestión eficiente y flexible de la información de los productos, el carrito y la facturación.

## Persistencia de datos
El stock de los productos y la información relevante se almacenan en **LocalStorage**, asegurando persistencia entre sesiones del usuario.

## Contribución
Si deseas contribuir al proyecto, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad:
   ```sh
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios y haz commit:
   ```sh
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Sube los cambios a tu repositorio:
   ```sh
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un Pull Request en el repositorio original.

## Usuarios de prueba
### Cliente:
- **Usuario**:
  cliente
- **Clave**:
  cliente123
### Administrador:
- **Usuario**:
  admin
- **Clave**:
  admin123

## Pruebas

Para ejecutar las pruebas automatizadas, usa:

bash
pnpm run test:ecommerce

Las pruebas están implementadas con *Vitest el despliegue se realiza mediante **CI/CD en Azure*. (No se desplegó en AWS por problemas con la cuenta)

Se utilizan herramientas como:

- *GitHub Actions* para ejecutar pruebas y desplegar cambios.
- *Azure Static Web Apps* para alojar la aplicación.

El despliegue se realiza automáticamente al hacer push a la rama principal.

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

| Comando           | Descripción                                   |
| ----------------- | --------------------------------------------- |
| npm run dev:ecommerce | Inicia el entorno de desarrollo               |
| npm run build:ecommerce | Genera una versión optimizada para producción |
| npm run test:ecommerce | Ejecuta pruebas automatizadas                 |
| npm run storybook:ecommerce | Inicia Storybook para visualizar componentes |
| npm run lint:ecommerce | Ejecuta el linter para mantener el código limpio |
| npm run start:ecommerce | Inicia un servidor de producción localmente  |

## Arquitectura del Proyecto

```plaintext
ecommerce-app/
├── apps/ecommerce/    # Código fuente del proyecto
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── store/       # Estado global con Zustand
│   │   ├── services/    # Llamadas a APIs
│   │   ├── tests/       # Pruebas automatizadas
│   │   ├── stories/     # Historias de Storybook
│   │   ├── App.tsx      # Componente principal
│   │   ├── main.tsx     # Punto de entrada de la aplicación
│   │   ├── ...          # Otros archivos de configuración
│
├── packages/utils-library-ecommerce-app/  # Biblioteca de utilidades
│   ├── src/
│   │   ├── index.ts   # Punto de entrada de la biblioteca
│   │   ├── ...        # Otros archivos de configuración
```

## 🔗 Deploy en Azure
[🌍 Url del proyecto](https://zealous-forest-0aa8a0710.6.azurestaticapps.net/)

## Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).
