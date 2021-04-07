window.onload = datos;

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
}

function datos() {
    var perfilActual = readArrayFromSessionStorage("perfilActual");
    document.getElementById("user_admin").innerHTML = perfilActual.user;
    document.getElementById("email_admin").innerHTML = perfilActual.email;
}