let usuarioLogueado = localStorage.getItem('emailLogin');
let navLoginRegistro = document.querySelector(".login_y_registro");

if (usuarioLogueado && navLoginRegistro) {
    navLoginRegistro.innerHTML = `
        
        <ul class="saludo_ul">

            <li><span class="saludo_usuario">Bienvenido: ${usuarioLogueado}</span></li>
            <li class="separador_login_register_saludo">|</li>
            <li><a href="#" class="btn_logout">logout</a></li>
        </ul>
        </section>
    `;
   
}

