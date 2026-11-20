let formularioLogin = document.querySelector(".form_login");
let campoEmail = document.querySelector("#email_login");
let campoPassword = document.querySelector("#contrasena_login");
let formularioBusqueda=document.querySelector(".buscador");
let campoBuscar=document.querySelector(".input_buscador");
let mensajeError=document.querySelector(".error_caracteres");
let email_campo_vacio=document.querySelector(".error_mail_login")
let contraseña_error=document.querySelector(".error_contrasena_login")




formularioLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    if (campoEmail.value === "") {
        email_campo_vacio.innerText="El campo no puede estar vacio"
        
    }

    else if (campoPassword.value === "") {
        contraseña_error.innerText="El campo no puede estar vacio"
        
    }

    else if (campoPassword.value.length < 6) {
        contraseña_error.innerText="La contraseña debe tener al menos 6 caracteres"
        
    }
    else{
        
        localStorage.setItem('emailLogin', campoEmail.value);
        location.href = "./index.html"; 
        this.submit()       
    }
});
formularioBusqueda.addEventListener("submit", function(event){
        event.preventDefault()

        if (campoBuscar.value===""){
            mensajeError.innerText="El campo no puede estar vacio";
        }
        else if (campoBuscar.value.length < 3){
            mensajeError.innerText="Debe escribir al menos 3 caracteres";
        }
        else{
            this.submit()
        }
    });



campoEmail.addEventListener("keydown", function(){
    email_campo_vacio.innerText = "";
});

campoPassword.addEventListener("keydown", function(){
    contraseña_error.innerText = "";
});

campoBuscar.addEventListener("keydown", function(){
    mensajeError.innerText = "";
});