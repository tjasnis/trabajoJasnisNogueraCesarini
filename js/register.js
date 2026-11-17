let formRegister=document.querySelector(".form_register");
let mailRegister=document.querySelector("#email_registro");
let contrasenaRegister=document.querySelector("#contrasena_primera_vez");
let repetirRegister=document.querySelector("#repetir_contrasena");
let noAceptoTerminos = document.querySelector("#no_acepto_terminos");


formRegister.addEventListener("submit", function(event){
    event.preventDefault();

    if (mailRegister.value==""){
        alert("El campo email es obligatorio");
    }
    else if (contrasenaRegister.value==""){
        alert("El campo contraseña es obligatorio");
    }
    else if (repetirRegister.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }

    else if (contrasenaRegister.value!=repetirRegister.value){
        alert("las contraseñas no coinciden")
    }
    else if(noAceptoTerminos.checked){
        alert("Debe aceptar los terminos")
    }
    else{
        this.submit()
        location.href="./login.html"
        localStorage.setItem('emailRegister', mailRegister.value)
        


    }
});
