import {header} from "./componentes/header.js";
import {home} from "./vistas/home.js";

function app(){
    
    return`
        ${header()};

        <h1>APP</h1>
    `    
}

document.querySelector('#root').innerHTML = app();

document.querySelector('#vistas').innerHTML = home();