let formRegister=document.querySelector(".form_register");
let mailRegister=document.querySelector("#email_registro");
let contrasenaRegister=document.querySelector("#contrasena_primera_vez");
let repetirRegister=document.querySelector("#repetir_contrasena");
let acepto_terminos = document.querySelector("#acepto_terminos");


formRegister.addEventListener("submit", function(event){
    event.preventDefault();

    if (mailRegister.value==""){
        document.querySelector(".error_email_registro").innerText="El campo no puede estar vacio";
    }
    else if (contrasenaRegister.value==""){
        document.querySelector(".error_primer_contrasena_registro").innerText="El campo no puede estar vacio";
    }
    else if (repetirRegister.value.length < 6){
        document.querySelector(".error_repetir_contrasena_registro").innerText="La contraseña debe tener al menos 6 caracteres";
    }
    else if (contrasenaRegister.value!=repetirRegister.value){
        document.querySelector(".error_repetir_contrasena_registro").innerText="Las contraseñas no coinciden";
    }
    else if(acepto_terminos.value!=true){
        document.querySelector(".terminos_error").innerText="Debe aceptar los términos y condiciones"
    }
    else{
        this.submit()
        location.href="./login.html"
        localStorage.setItem('emailRegister', mailRegister.value)
        


    }
});
