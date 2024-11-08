# Sesión anuario

1. Creamos carpeta de proyecto
2. Creamos repo con el readme
3. npm init
4. instalar con npm install
5. gitignore (node_modules), npm install lite-server
6. creamos index.html
7. lanzar un servidor remoto con `npm run dev`, Ejemplo de creación de dev en apartado script en package.json:`"dev": "lite-server",`

8. crear bs-config.json y poner dentro lo siguiente:

{
    "port": 8000,
    "files": ["./src/**/*.{html, htm, css, js}"],
    "server": {"baseDir": "./src"}
}

9. ponemos una funcion para la div vacía creada anteriormente, poniendo lo siguiente en `index.js`:

function app(){
    return`<h1>APP</h1>`    
}
document.querySelector('#root').innerHTML = app(); 

10. añadimos contenido al `header.js`, en este caso es un trozo que avisa que es header, tenemos que importarlo al `index.js`, así que ponemos la línea arribba del todo en `index.js` lo siguiente: `import {header} from "./componentes/header.js";` y a la funcion del `header.js`, para exportar esta funcion solamente añadimos `export` al principio cuando se define la funcion, para que quede de la siguiente manera:

export function header(){
    return"<p>Este es el header</p>";
}

11. Añadir tipo al <script> en html para que quede de la siguiente manera: `<script src="index.js" type="module"></script>`

12. Ahira podemos implementar la funcion del header dentro de la funcion del index.js y quedará de la siguiente manera:

import {header} from "./componentes/header.js";

function app(){
    
    return`
        ${header()};
        <h1>APP</h1>
    `    
}

document.querySelector('#root').innerHTML = app();


13. Ahora creamos otro modulo `home.js`, que estará dentro de la carpeta `vistas`, que contendrá lo siguiente:

export function home(){
    return`
        <h1>Home</h1>
    `
}

14. Ahora toca crear una div nueva con la id `vistas` y a través de `index.html` meter datos como lo hicimos anteriormente con `app()`. solo habrá que meter una línea más: `document.querySelector('#vistas').innerHTML = home();`