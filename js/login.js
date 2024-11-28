let formulario = document.querySelector(".form-login");
let email = document.querySelector("#email");
let password = document.querySelector ("#password");

formulario.addEventListener("submit", function (event){
    event.preventDefault();

    if (email.value === ""){
        alert("Por favor complete el campo email");
        return;
    }
    if (password.value === ""){
        alert("Por favor complete el campo contraseña");
        return;
    }

    window.location.href = "./index.html"

})