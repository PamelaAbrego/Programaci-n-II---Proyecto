window.onload = datos;

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function datos() {
    var perfilActual = readArrayFromLocalStorage("perfilActual");
    document.getElementById("user_admin").innerHTML = perfilActual.user;
}