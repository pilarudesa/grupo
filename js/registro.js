let formulario = document.querySelector("form")

let campoEmail = document.querySelector("#invalid-email")
let email = document.querySelector("#email")

let campoPassword = document.querySelector("#invalid-password")
let password = document.querySelector("#password")

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    if (email.value == "") {
        campoEmail.style.display = "block";
        campoEmail.innerText = "Por favor complete el campo"
    }
    if (password.value = "") {
        campoPassword.style.display = "block";
        campoPassword.innerText = "Por favor complete el campo"
    }
})