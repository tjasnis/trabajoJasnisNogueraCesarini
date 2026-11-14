let usuarioLogueado = localStorage.getItem('userEmail');
let navLoginRegistro = document.querySelector(".login_y_registro");

if (usuarioLogueado && navLoginRegistro) {
    navLoginRegistro.innerHTML = `
        <ul class="lista_login_y_register">
            <li><span class="saludo_usuario">Bienvenido: ${usuarioLogueado}</span></li>
            <li class="separador_login_register">|</li>
            <li><a href="#" class="btn_logout">logout</a></li>
        </ul>
    `;
}