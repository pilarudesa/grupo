let queryString = location.search;
let obj = new URLSearchParams(queryString)
let palabraBuscada = obj.get("search")
console.log(palabraBuscada);

let resultado = document.querySelector(".result")

if (palabraBuscada === "") {
    resultado.innerText = "No se ingresó ningún término de búsqueda.";
}
if (palabraBuscada === null ) {
    resultado.innerText = "No se ingresó ningún término de búsqueda.";
}

else if (palabraBuscada.length < 3) {
    resultado.innerText = "El término debe tener al menos 3 caracteres.";
}

else {
    resultElement.innerText = `Resultados para: "${palabraBuscada}"`;
}









