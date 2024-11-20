
let formulario = document.querySelector(".formulario-busqueda");
let campoBusqueda = document.querySelector("#search");
let mensajeError = document.querySelector("#error-message");


formulario.addEventListener("submit", function (event) {
    let valor = campoBusqueda.value; 
    
    if (valor === "") {
        event.preventDefault(); // Evitar el envío
        mensajeError.innerText = "El campo no puede estar vacío.";
    } else if (valor.length < 3) {
        event.preventDefault(); 
        mensajeError.innerText = "El campo debe tener al menos 3 caracteres.";
    } else {
    mensajeError.innerText = ""; // Borrar mensaje de error
        }


    });


let contenedorRecetas = document.querySelector("#contenedor-recetas");
let botonVerMas = document.querySelector("#cargar-mas");
let skip = 0;

function cargarRecetas 
