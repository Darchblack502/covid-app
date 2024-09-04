# Prueba Técnica de Desarrollador Junior Front - End / Bienestar Primero

## Objetivo

Crear una aplicación web que consuma la API de The COVID Tracking Project y muestre
información actualizada sobre la situación de COVID-19 en los Estados Unidos. La
aplicación debe permitir al usuario seleccionar un estado específico para ver los datos
detallados de ese estado, incluyendo casos confirmados, muertes, hospitalizaciones, y
pruebas realizadas.

## Tecnologías Utilizadas

- *Lenguajes:* JavaScript, CSS, HTML, SCSS
- *Framework:* Bootstrap 5.3.3
- *Librerías:* Chart.js
- *Herramientas:* Node.js, npm

## Instalación y Configuración

1. Clonar el repositorio:

    ```Bash
        git clone https://github.com/Darchblack502/covid-app.git
    ```

2. Instalación de paquetes

    ```Properties
        npm i bootstrap@5.3.3
    ```

3. Ejecución de script

    ```Properties
        npm run build-css
        npm start
    ```

4. Uso de la aplicación

    Abre el archivo **`index.html`** en tu navegador. Esto te permitirá interactuar con la interfaz y consultar los datos de la API sobre la situación de COVID-19 en diferentes estados de EE.UU.

## Estructura del Proyecto

```Py
covid-app/  # Directorio Raíz
├── index.html/  # Archivo principal de la aplicación.
├── scss/  # Directorio de estilos
│   ├── custom.css # Archivo de estilos personalizados.
│   └── custom.scss # Archivo SCSS para personalizar los estilos de Bootstrap.
├── app.js  # Script principal que maneja la lógica de la aplicación.
└── README.md  # Documentación principal del proyecto.
```
