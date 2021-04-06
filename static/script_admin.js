window.onload = datos;

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function datos() {
    var perfilActual = readArrayFromLocalStorage("perfilActual");
    document.getElementById("user_admin").innerHTML = perfilActual.user;
}

function enviado() {
    document.getElementById("resultado_enviar").innerHTML = "Formluario enviado";
}

function ir_form() {
    window.location = "http://localhost:5000/form_gruas"
}

function add() {
    var cliente = document.getElementById("cliente").value;
    var email = document.getElementById("email").value;
    var modelo = document.getElementById("modelo").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var ubicacion = document.getElementById("ubicacion").value;
    var fecha = String(document.getElementById("fecha").value);
    var tiempo = parseInt(document.getElementById("tiempo").value);
    var estado = "Enviado";
    addResultToStorage(cliente, email, modelo, cantidad, ubicacion, fecha, tiempo, estado);

    enviado();
}

function addResultToStorage(cliente, email, modelo, cantidad, ubicacion, fecha, tiempo, estado) {
    var addResultArray = [];

    if (localStorage.getItem("lAddResultArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("lAddResultArray"));
    }

    var current_add_result = {
        user: cliente,
        email: email,
        modelo: modelo,
        cantidad: cantidad,
        ubicacion: ubicacion,
        fecha: fecha,
        tiempo: tiempo,
        estado: estado
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("lAddResultArray", JSON.stringify(addResultArray));
}

function addResultToStorageRegistrosRecibidos(cliente, email, modelo, cantidad, ubicacion, fecha, tiempo) {
    var addResultArray = [];

    if (localStorage.getItem("RegistrosRecibidos") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("RegistrosRecibidos"));
    }

    var current_add_result = {
        user: cliente,
        email: email,
        modelo: modelo,
        cantidad: cantidad,
        ubicacion: ubicacion,
        fecha: fecha,
        tiempo: tiempo,
        estado: "Recibido"
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("RegistrosRecibidos", JSON.stringify(addResultArray));
}

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function actDatos() {
    var array = readArrayFromLocalStorage("lAddResultArray")
    var myTable = document.getElementById("tabla");

    if (localStorage.getItem("lAddResultArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("lAddResultArray"));
    }

    for (var i = 0; i < array.length; i++) {
        var row = myTable.insertRow(1);

        row.insertCell(0).innerHTML = array[i].user;
        row.insertCell(1).innerHTML = array[i].email;
        row.insertCell(2).innerHTML = array[i].modelo;
        row.insertCell(3).innerHTML = array[i].cantidad;
        row.insertCell(4).innerHTML = array[i].ubicacion;
        row.insertCell(5).innerHTML = array[i].fecha;
        row.insertCell(6).innerHTML = array[i].tiempo;
        row.insertCell(7).innerHTML = "<button onclick='aceptarElementByIndex(" + i + ")'>Aceptar</button>";
        row.insertCell(8).innerHTML = "<button onclick='rechazarAlquiler(" + i + ")'>Rechazar</button>";
        array[i].estado = "Recibido"

        addResultToStorageRegistrosRecibidos(array[i].user, array[i].email, array[i].modelo, array[i].cantidad, array[i].ubicacion, array[i].fecha, array[i].tiempo)
    }
}

