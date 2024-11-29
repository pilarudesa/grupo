
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


let contenedorRecetas = document.querySelector(".seccion-recetas");
let botonVerMas = document.querySelector(".botonVerMas");
let skip = 0;
let limit = 10;


function mostrarRecetas() {
    let url = (`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
    fetch (url)

        .then(function (response) {
            return response.json(); 
        })

        .then(function (data) {
            let recetas = contenedorRecetas.innerHTML;
            console.log(data); 
            

            recetas=""
            for (let i = 0; i < data.recipes.length; i++) {
                
                recetas += `
                    
                    <article class="recipe">
                        <img class="imagen-receta" src="${data.recipes[i].image}" alt="foto receta">
                        <h2>${data.recipes[i].name}</h2>
                        <p><strong>Dificultad:</strong> ${data.recipes[i].difficulty}</p>
                        <a href="receta.html?id=${data.recipes[i].id}" class="detalle-link">Ver detalle</a>
                    </article>
                `
            }

           contenedorRecetas.innerHTML = recetas;

           
            
        })
        .catch(function (error) {
            console.error("Error al cargar recetas:" + error);
        });
}

mostrarRecetas();
botonVerMas.addEventListener("click", function(){
  
    limit += 10 ;
    mostrarRecetas();
});







