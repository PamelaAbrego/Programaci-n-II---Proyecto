//llamado a elementos para la parte del diseño
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

//declaracion de variables para parte de estilo y diseño
var contenedorLoginRegister = document.querySelector(".contenedorLoginRegister");
var formLogin = document.querySelector(".formLogin");
var formRegister = document.querySelector(".formRegistro");
var backBoxLogin = document.querySelector(".backBoxLogin");
var backBoxRegister = document.querySelector(".backBoxRegister");
// declaracion de variables para la parte de  funcionalidad

//funciones para la programación de los botones y formularios en sí
//funcion para comparar los valores ngresados y ver si son validos
function checkLogin() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("passw").value;
    var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    // alert("in form ->" + user);
    // alert("in session ->" + userArray[0].user)
    //obtener el usuario
    if (user !== null && user !== "") {
        if (password !== null && password !== "") {
            alert(user + " " + password);
        } else {
            alert("password must not be empty");
        }
    } else {
        alert("user must not be empty");
    }
}

//funcion que guarda valores en el arreglo
function registerNewUser() {
    var reg_user = document.getElementById("user_Reg").value;
    var reg_password = document.getElementById("passw_Reg").value;


    var userArray = [];

    var current_reg = {
        user: reg_user,
        password: reg_password,

    };

    userArray.push(current_reg);
    sessionStorage.setItem("wUserArray", JSON.stringify(userArray));
}

//funcion para encontrar ususarios en el arreglo

function checkLoginInfo(user, password, userArray) {
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].user === user && userArray[i].password === password) {
            return true;
        }

    }
    return false;
}
//funciones para diseño y anmaciones de la página
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

