# Meli - Test

● Cliente:

○ HTML
○ React
○ Sass

● Servidor:

○ Node
○ Express

## Pasos para iniciar la aplicación

1. Clone este repositorio usando `git clone` o descargue directamente y extraiga su contenido
2. Use la terminal para navegar hacia la carpeta server del proyecto
    - ejecute el comando `npm install` para instalar dependencias del servidor
    - ejecute el comando `npm start` para iniciar el servidor
3. En una nueva terminal navegue hacia la carpeta client
    - ejecute el comando `npm install` para instalar dependencias del cliente
    - ejecute el comando `npm start` para iniciar el cliente
4. Use su navegador de preferencia para acceder a la ruta http://localhost:3000/ donde verá la aplicación
## Test unitarios

Para ejecutar los test unitarios use el comando `npm test` y adicione el flag --coverage en caso de que quiera generar el reporte de covertura.

## Generar archivos optimizados para producción

Para generar los archivos para producción use el comando `npm run build` en la carpeta client
y `npm run build` en la carpeta server