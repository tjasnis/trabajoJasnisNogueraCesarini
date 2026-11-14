let formularioLogin = document.querySelector(".form_login");
let campoEmail = document.querySelector("#email_login");
let campoPassword = document.querySelector("#contrasena_login");

formularioLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    if (campoEmail.value == "") {
        alert("El campo email es obligatorio.");
        return;
    }

    if (campoPassword.value == "") {
        alert("El campo contraseña es obligatorio.");
        return;
    }

    if (campoPassword.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    localStorage.setItem('userEmail', campoEmail.value);
    
    location.href = "./index.html";
});