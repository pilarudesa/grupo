let queryString = location.search;
let objeto = new URLSearchParams(queryString);
let tag = objeto.get("category");
let url = `https://dummyjson.com/recipes/tag/${tag}`
console.log(queryString)
let tagsHTML = document.querySelector(".contenedor")
console.log(tag);

fetch(url)
.then (function(response) {
    return response.json()
})

.then(function(data){
   console.log(data.recipes)

    for (let i = 0; i < data.recipes.length; i++) {

        tagsHTML.innerHTML += `
                 <div class = "contenedor">
                    <p class="titulo-por-categoria">Categoria: ${data.recipes[i].tags}</p>
                    <img class= "imagen-categoria" src="${data.recipes[i].image}" alt="${data.recipes[i].name}">
                    <h2 class= "nombre-receta">${data.recipes[i].name}</h2>
                    <p><strong>Dificultad:</strong> ${data.recipes[i].difficulty}</p>
                    <a href="receta.html?id=${data.recipes[i].id}" class="detalle-link">Ver detalle</a>
                </div>
            `;

  
    }
})
.catch(function(error){
    console.log(error)
})