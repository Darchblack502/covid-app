# Prueba Técnica de Desarrollador Junior Front-End / Bienestar Primero

## Objetivo
Crear una aplicación web que consuma la API de [The COVID Tracking Project](https://covidtracking.com/data/api) y muestre información actualizada sobre la situación de COVID-19 en los Estados Unidos. La aplicación permite al usuario seleccionar un estado específico para ver los datos detallados de ese estado, incluyendo casos confirmados, muertes, hospitalizaciones y pruebas realizadas.

## Tecnologías Utilizadas
- **Lenguajes:** JavaScript, CSS, HTML, SCSS
- **Framework:** Bootstrap 5.3.3
- **Librerías:** Chart.js
- **Herramientas:** Node.js, npm

## Instalación y Configuración
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2. Navegar al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```
3. Instalar las dependencias:
    ```bash
    npm install bootstrap@5.3.3
    npm install chart.js
    ```

### Solución de Problemas
Si experimentas algún error al intentar instalar Bootstrap, sigue estos pasos:
1. Abre PowerShell como administrador.
2. Ejecuta el siguiente comando:
    ```bash
    Set-ExecutionPolicy RemoteSigned
    ```
3. Acepta el cambio escribiendo "S" y presiona Enter.
4. Vuelve al entorno de desarrollo (por ejemplo, Visual Studio Code) y ejecuta nuevamente:
    ```bash
    npm install bootstrap@5.3.3
    ```

## Uso de la Aplicación
Para acceder a la aplicación, simplemente abre el archivo `index.html` en tu navegador. Esto te permitirá interactuar con la interfaz y consultar los datos de la API sobre la situación de COVID-19 en diferentes estados de EE.UU.

## Estructura del Proyecto
- `index.html`: Archivo principal de la aplicación.
- `styles.css`: Archivo de estilos personalizados.
- `custom.scss`: Archivo SCSS para personalizar los estilos de Bootstrap.
- `app.js`: Script principal que maneja la lógica de la aplicación.

## Notas Adicionales
- Asegúrate de tener Node.js instalado en tu sistema para manejar las dependencias.
- Puedes consultar la [documentación oficial de Chart.js](https://www.chartjs.org/docs/latest/) para más detalles sobre su uso.

## Licencia
Este proyecto se realiza como parte de una prueba técnica y no cuenta con una licencia específica.

