let formularioLogin = document.querySelector(".form_login");
let campoEmail = document.querySelector("#email_login");
let campoPassword = document.querySelector("#contrasena_login");

formularioLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    if (campoEmail.value == "") {
        document.querySelector(".error_mail_login").innerText="El campo no puede estar vacio"
        return;
    }

    else if (campoPassword.value == "") {
        document.querySelector(".error_contrasena_login").innerText="El campo no puede estar vacio"
        return;
    }

    else if (campoPassword.value.length < 6) {
        document.querySelector(".error_contrasena_login").innerText="La contraseña debe tener al menos 6 caracteres"
        return;
    }

    localStorage.setItem('userMail', campoEmail.value);
    
    location.href = "./index.html";
});