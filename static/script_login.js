
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
    var userArray = JSON.parse(localStorage.getItem("wUserArray"));
    // alert("in form ->" + user);
    // alert("in session ->" + userArray[0].user)
    //obtener el usuario
    if (user !== null && user !== "") {
        if (password !== null && password !== "") {
            var canLogin = checkLoginInfo(user, password, userArray);
            if (canLogin === true) {
                var email = checkEmail(user, password, userArray);
                var role = checkRole(user, password, userArray);
                perfilActual(user, password, email, role);
                if (role === "Cliente") {
                    window.location.href = "/perfil_cliente";
                    alert("Bienvenido")
                }
                if (role === "Administrador") {
                    window.location.href = '/perfil_admin'
                    alert("Bienvenido")
                }
            } else {
                alert("El usuario o la contraseña no son correctos.")
            }
        } else {
            alert("Ingrese una contraseña, por favor.");
        }
    } else {
        alert("Ingrese un usuario, por favor.");
    }
}

//función que coloca en el local storage el perfil actual
function perfilActual(user, password, email, role) {
    if (sessionStorage.getItem("perfilActual") !== null) {
        sessionStorage.removeItem("perfilActual");
    }

    var current_reg = {
        user: user,
        password: password,
        email: email,
        role: role
    };

    perfilActual = current_reg;
    sessionStorage.setItem("perfilActual", JSON.stringify(perfilActual));
}


// función que revisa si es administrador o cliente
function checkRole(user, password, userArray) {
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].user === user && userArray[i].password === password) {
            return userArray[i].role;
        }
    }
}

function checkEmail(user, password, userArray) {
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].user === user && userArray[i].password === password) {
            return userArray[i].email;
        }
    }
}
//funcion que guarda valores en el arreglo
function registerNewUser() {
    var reg_user = document.getElementById("user_Reg").value;
    var reg_password = document.getElementById("passw_Reg").value;
    var reg_email = document.getElementById("email").value;

    var userArray = [];

    if (localStorage.getItem("wUserArray") !== null) {
        userArray = JSON.parse(localStorage.getItem("wUserArray"));
    }

    var current_reg = {
        user: reg_user,
        password: reg_password,
        email: reg_email,
        role: "Cliente"
    };

    userArray.push(current_reg);
    localStorage.setItem("wUserArray", JSON.stringify(userArray));
}

//funcion para encontrar ususarios en el arreglo

function checkLoginInfo(user, password, userArray) {
    if (userArray !== null && userArray.length > 0) {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].user === user && userArray[i].password === password) {
                return true;
            }

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

