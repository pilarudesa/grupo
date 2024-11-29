
let formulario = document.querySelector(".formulario-busqueda");
let campoBusqueda = document.querySelector("#search");
let mensajeError = document.querySelector("#error-message");


formulario.addEventListener("submit", function (event) {
    let valor = campoBusqueda.value; 
    
    if (valor === "") {
        event.preventDefault(); 
        mensajeError.innerText = "El campo no puede estar vacío.";
    } else if (valor.length < 3) {
        event.preventDefault(); 
        mensajeError.innerText = "El campo debe tener al menos 3 caracteres.";
    } else {
    mensajeError.innerText = ""; 
        }


    });


let contenedorRecetas = document.querySelector("#contenedor-recetas");
let botonVerMas = document.querySelector("#cargar-mas");
let skip = 0;
let url = `https://dummyjson.com/recipes?limit=10&skip=${skip}&select=name,image,difficulty`

function mostrarRecetas() {
    
    fetch (url)

        .then(function (response) {
            return response.json(); 
        })
        .then(function (data) {
            let recetas = data.recipes;
            console.log(data); 
            let recetasHTML = "";

            
            for (let i = 0; i < recetas.length; i++) {
                let receta = recetas[i]; 

               
                recetasHTML += `
                    <div class="recipe">
                        <img class="imagen-receta" src="${receta.image}" alt="${receta.name}">
                        <h2>${receta.name}</h2>
                        <p><strong>Dificultad:</strong> ${receta.difficulty}</p>
                        <a href="receta.html?id=${receta.id}" class="detalle-link">Ver detalle</a>
                    </div>
                `;
            }

           contenedorRecetas.innerHTML += recetasHTML;

           
            skip += 10;
        })
        .catch(function (error) {
            console.error("Error al cargar recetas:", error);
        });
}


botonVerMas.addEventListener("click", mostrarRecetas);

mostrarRecetas();



