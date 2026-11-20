let formRegister=document.querySelector(".form_register");
let mailRegister=document.querySelector("#email_registro");
let contrasenaRegister=document.querySelector("#contrasena_primera_vez");
let repetirRegister=document.querySelector("#repetir_contrasena");
let acepto_terminos = document.querySelector("#acepto_terminos");
let formularioBusqueda=document.querySelector(".buscador");
let campoBuscar=document.querySelector(".input_buscador");
let mensajeError=document.querySelector(".error_caracteres");
let campo_mail_vacio=document.querySelector(".error_email_registro")
let campo_contraseña_vacio=document.querySelector(".error_primer_contrasena_registro")
let error_repetir_contraseña=document.querySelector(".error_repetir_contrasena_registro")
let error_terminos=document.querySelector(".terminos_error")


formRegister.addEventListener("submit", function(event){
    event.preventDefault();

    if (mailRegister.value===""){
        campo_mail_vacio.innerText="El campo no puede estar vacio";
    }
    else if (contrasenaRegister.value===""){
        campo_contraseña_vacio.innerText="El campo no puede estar vacio";
    }
    else if (contrasenaRegister.value.length<6 && contrasenaRegister.value.length>0){
        campo_contraseña_vacio.innerText="la contraseña debe tener al menos 6 caracteres"
    }
    else if (repetirRegister.value===""){
        error_repetir_contraseña.innerText="el campo no puede estar vacio"
    }
    else if (repetirRegister.value.length < 6){
        error_repetir_contraseña.innerText="La contraseña debe tener al menos 6 caracteres";
    }
    else if (contrasenaRegister.value!=repetirRegister.value){
        error_repetir_contraseña.innerText="Las contraseñas no coinciden";
    }
    else if(!acepto_terminos.checked){
        error_terminos.innerText="Debe aceptar los términos y condiciones"
    }
    else{
       
        location.href="./login.html"
        localStorage.setItem('emailRegister', mailRegister.value)
         this.submit()
        


    }
});


 formularioBusqueda.addEventListener("submit", function(event){
        event.preventDefault()

        if (campoBuscar.value==""){
            mensajeError.innerText="El campo no puede estar vacio";
        }
        else if (campoBuscar.value.length < 3){
            mensajeError.innerText="Debe escribir al menos 3 caracteres";
        }
        else{
            this.submit()
        }
    });


mailRegister.addEventListener("keydown", function(){
    campo_mail_vacio.innerText = "";
});
contrasenaRegister.addEventListener("keydown", function(){
    campo_contraseña_vacio.innerText = "";
});
repetirRegister.addEventListener("keydown", function(){
    error_repetir_contraseña.innerText = "";
});
acepto_terminos.addEventListener("click", function(){
    error_terminos.innerText = "";
});
campoBuscar.addEventListener("keydown", function(){
    mensajeError.innerText = "";
}); 