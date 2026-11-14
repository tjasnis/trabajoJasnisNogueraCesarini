let botonLogout = document.querySelector(".btn_logout");

if (botonLogout) {
    botonLogout.addEventListener('click', function(event) {
        event.preventDefault(); 
        localStorage.removeItem('userEmail');
        location.href = "./index.html";
    });
}