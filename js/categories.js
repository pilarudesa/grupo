let queryString = location.search;
let objeto = new URLSearchParams(queryString);
let tag = objeto.get("categories");
let url = "https://dummyjson.com/recipes/tags"
console.log(queryString)
let tagsHTML = document.querySelector(".categorias")
console.log(tag);

fetch(url)
.then (function(response) {
    return response.json()
})

.then(function(data){
   console.log(data)

    for (let i = 0; i < data.length; i++) {

        tagsHTML.innerHTML += `
                 <div class = "categorias">
                    <p><a href="./category.html?category=${data[i]}">${data[i]}</a> </p>
                </div>
            `;
    }
})
.catch(function(error){
    console.log(error)
})