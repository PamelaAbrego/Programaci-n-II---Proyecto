
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

//declaracion de variables
var contenedorLoginRegister = document.querySelector(".contenedorLoginRegister");
var formLogin = document.querySelector(".formLogin");
var formRegister = document.querySelector(".formRegistro");
var backBoxLogin = document.querySelector(".backBoxLogin");
var backBoxRegister = document.querySelector(".backBoxRegister");

function anchoPagina() {
    if (window.innerWidth > 850) {
        backBoxLogin.style.display = "block";
        backBoxRegister.style.display = "block";
    } else {
        backBoxRegister.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.display = "none";
        formLogin.style.display = "none";
        contenedorLoginRegister.style.left = "0px";

    }
}
anchoPagina();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formRegister.style.display = "none";
        contenedorLoginRegister.style.left = "10px";
        formLogin.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.opacity = "0";
    } else {
        formRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
        formLogin.style.display = "block";
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "none";

    }

}

function register() {
    if (window.innerWidth > 850) {
        formRegister.style.display = "block";
        contenedorLoginRegister.style.left = "410px";
        formLogin.style.display = "none";
        backBoxRegister.style.opacity = "0";
        backBoxLogin.style.opacity = "1";
    } else {
        formRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formLogin.style.display = "none";
        backBoxRegister.style.display = "none";
        backBoxLogin.style.display = "block";
        backBoxLogin.style.opacity = "1";
    }

}

