let formRegister=document.querySelector(".form_register");
let mailRegister=document.querySelector("#email_registro");
let contrasenaRegister=document.querySelector("#contrasena_primera_vez");
let repetirRegister=document.querySelector("#repetir_contrasena");

formRegister.addEventListener("submit", function(event){
    event.preventDefault();

    if (mailRegister.value==""){
        alert("El campo email es obligatorio");
    }
    else if (contraseñaRegister.value==""){
        alert("El campo contraseña es obligatorio");
    }
    else if (repetirRegister.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }
    else if (repetirRegister.value == contraseñaRegister.value){
        location.href="./login.html";
    }
    else{
        alert("Las contraseñas no coinciden")
    }
});
