let formulario = document.querySelector(".form-registro")

let campoEmail = document.querySelector("#invalid-email")
let email = document.querySelector("#email")

let campoPassword = document.querySelector("#invalid-password")
let password = document.querySelector("#password")

formulario.addEventListener('submit', function(event) {

    event.preventDefault();
    console.log(email.value);
    
    if (email.value == "") {
        campoEmail.innerText = "Por favor complete el campo"
        campoEmail.style.color = "red"
    }
    if (password.value == "") {
        campoPassword.innerText = "Por favor complete el campo"
        campoPassword.style.color = "red"
    }
    window.location.href = "./login.html"
})