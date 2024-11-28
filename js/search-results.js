let queryString = location.search;
let objeto = new URLSearchParams (queryString);
let terminobuscado = objeto.get("search");
console.log(terminobuscado);

let url = `https://dummyjson.com/recipes/search?q=Margherita${terminobuscado}`
console.log(url);
let resultadosTitulo = document.querySelector("#resultados-titulo");
//let contenedorResultadosHTML = document.querySelector("#contenedor-resultados");
let recetas = data ;
let contenedorResultadosHTML = "";

resultadosTitulo.innerText = `Resultados de busqueda para: "${terminobuscado}"`;

function buscarRecetas (){
    fetch(url)
    
    
    .then (function(response) {
        return response.json()
        

    })

    .then(function(data){
        console.log(data);
        
        console.log(data.recipes)
        let recetas = data.recipes;

        if (recetas.length == 0){
            contenedorResultados.innerHTML += `No se encontraron coincidencias para "${searchTerm}"`;
            return; 
        }

        for (let i = 0; i < recetas.length; i++) {
            let receta = recetas[i];

            contenedorResultadosHTML  += `
                    <div class="receta">
                        <img src="${receta.image}" alt="${receta.name}">
                        <h2>${receta.name}</h2>
                        <a href="./detalle.html?id=${receta.id}">Ver detalle</a>
                    </div>
                `;
            
        }



    })

    .catch(function(error){
        console.log("Error al buscar recetas:", error)
    }) ;
     
}

buscarRecetas();
