window.onload = actDatos;

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

function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
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
        row.insertCell(7).innerHTML = "<button onclick='aceptarAlquiler(" + i + ")'>Aceptar</button>";
        row.insertCell(8).innerHTML = "<button onclick='rechazarAlquiler(" + i + ")'>Rechazar</button>";
        row.insertCell(9).innerHTML = "<button onclick='eliminarAlquiler(" + i + ")'>Eliminar</button>";
        array[i].estado = "Recibido"

        addResultToStorageRegistrosRecibidos(array[i].user, array[i].email, array[i].modelo, array[i].cantidad, array[i].ubicacion, array[i].fecha, array[i].tiempo)
    }
    //aceptados();
}

function aceptarAlquiler(i) {
    var myTable = document.getElementById("tabla");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#86db72";

}

function rechazarAlquiler(i) {
    var myTable = document.getElementById("tabla");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#FF8066";
}