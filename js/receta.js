let queryString = location.search;
let objeto = new URLSearchParams(queryString);
let id = objeto.get("id");
console.log(id);
let url = `https://dummyjson.com/recipes/${id}`
fetch (url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
    let name = document.querySelector(".name")
    name.innerText += ` ${data.name}`
    let instructions = document.querySelector(".instructions")
    instructions.innerText += ` ${data.instructions}`
    let cookTimeMinutes = document.querySelector(".cookTimeMinutes")
    cookTimeMinutes.innerText += ` ${data.cookTimeMinutes}`
    let image = document.querySelector(".image")
    image.src = `${data.image}`
})
.catch(function(error){
    console.log(error)
})