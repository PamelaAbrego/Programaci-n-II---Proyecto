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
        //row.insertCell(9).innerHTML = "<button onclick='eliminarAlquiler(" + i + ")'>Eliminar</button>";
        array[i].estado = "Recibido"

        addResultToStorageRegistrosRecibidos(array[i].user, array[i].email, array[i].modelo, array[i].cantidad, array[i].ubicacion, array[i].fecha, array[i].tiempo)
    }
    cargarAceptados();
    cargarRechazados();
    //cargarEliminados();
}

function aceptarAlquiler(i) {
    var myTable = document.getElementById("tabla");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#86db72";
    myTable.rows[j].cells[7].colSpan = 3;
    myTable.rows[j].cells[7].innerHTML = "Aceptado";
    //myTable.rows[j].deleteCell(9);
    myTable.rows[j].deleteCell(8);
    alquileresAceptados(i);
}

function cargarAceptados() {
    var aceptados = readArrayFromLocalStorage("AlquileresAceptados");
    if (aceptados !== null) {
        var myTable = document.getElementById("tabla");
        for (var k = 0; k < aceptados.length; k++) {
            var i = aceptados[k].id;
            var j = myTable.getElementsByTagName('tr').length - 1 - i;
            var row = myTable.rows[j];
            row.style.backgroundColor = "#86db72";
            myTable.rows[j].cells[7].innerHTML = "Aceptado";
            //myTable.rows[j].deleteCell(9);
            myTable.rows[j].deleteCell(8);
            myTable.rows[j].cells[7].colSpan = 3;
        }
    }
}

function rechazarAlquiler(i) {
    var myTable = document.getElementById("tabla");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#FF8066";
    myTable.rows[j].cells[7].colSpan = 3;
    myTable.rows[j].cells[7].innerHTML = "Rechazado";
    //myTable.rows[j].deleteCell(9);
    myTable.rows[j].deleteCell(8);
    alquileresRechazados(i);
}

function cargarRechazados() {
    var rechazados = readArrayFromLocalStorage("AlquileresRechazados");
    if (rechazados !== null) {
        var myTable = document.getElementById("tabla");
        for (var k = 0; k < rechazados.length; k++) {
            var i = rechazados[k].id;
            var j = myTable.getElementsByTagName('tr').length - 1 - i;
            var row = myTable.rows[j];
            row.style.backgroundColor = "#FF8066";
            myTable.rows[j].cells[7].colSpan = 3;
            myTable.rows[j].cells[7].innerHTML = "Rechazado";
            //myTable.rows[j].deleteCell(9);
            myTable.rows[j].deleteCell(8);
            myTable.rows[j].cells[7].colSpan = 3;
        }
    }
}

/*
function eliminarAlquiler(i) {
    var myTable = document.getElementById("tabla");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    myTable.deleteRow(j);
    alquileresEliminados(i);
}

function cargarEliminados() {
    var eliminados = readArrayFromLocalStorage("AlquileresEliminados");
    if (eliminados !== null) {
        var myTable = document.getElementById("tabla");
        for (var k = 0; k < eliminados.length; k++) {
            var i = eliminados[k].id;
            var j = myTable.getElementsByTagName('tr').length - 1 - i;
            myTable.deleteRow(j);
        }
    }
}
*/
function alquileresAceptados(i) {
    var addResultArray = [];

    if (localStorage.getItem("AlquileresAceptados") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("AlquileresAceptados"));
    }

    var current_add_result = {
        id: i
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("AlquileresAceptados", JSON.stringify(addResultArray));


    var addResultArray1 = [];

    if (localStorage.getItem("AlquileresAceptadosRegistros") !== null) {
        addResultArray1 = JSON.parse(localStorage.getItem("AlquileresAceptadosRegistros"));
    }
    var array = readArrayFromLocalStorage("lAddResultArray");

    var current_add_result = {
        user: array[i].user,
        email: array[i].email,
        modelo: array[i].modelo,
        cantidad: array[i].cantidad,
        ubicacion: array[i].ubicacion,
        fecha: array[i].fecha,
        tiempo: array[i].tiempo,
        estado: "Aceptado"
    }

    addResultArray1.push(current_add_result)
    localStorage.setItem("AlquileresAceptadosRegistros", JSON.stringify(addResultArray1));

}

function alquileresRechazados(i) {
    var addResultArray = [];

    if (localStorage.getItem("AlquileresRechazados") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("AlquileresRechazados"));
    }

    var current_add_result = {
        id: i
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("AlquileresRechazados", JSON.stringify(addResultArray));

    var addResultArray1 = [];

    if (localStorage.getItem("AlquileresRechazadosRegistros") !== null) {
        addResultArray1 = JSON.parse(localStorage.getItem("AlquileresRechazadosRegistros"));
    }
    var array = readArrayFromLocalStorage("lAddResultArray");

    var current_add_result = {
        user: array[i].user,
        email: array[i].email,
        modelo: array[i].modelo,
        cantidad: array[i].cantidad,
        ubicacion: array[i].ubicacion,
        fecha: array[i].fecha,
        tiempo: array[i].tiempo,
        estado: "Rechazado"
    }

    addResultArray1.push(current_add_result)
    localStorage.setItem("AlquileresRechazadosRegistros", JSON.stringify(addResultArray1));
}

/*
function alquileresEliminados(i) {
    var addResultArray = [];

    if (localStorage.getItem("AlquileresEliminados") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("AlquileresEliminados"));
    }

    var current_add_result = {
        id: i
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("AlquileresEliminados", JSON.stringify(addResultArray));

    var addResultArray1 = [];

    if (localStorage.getItem("AlquileresEliminadosRegistros") !== null) {
        addResultArray1 = JSON.parse(localStorage.getItem("AlquileresEliminadosRegistros"));
    }
    var array = readArrayFromLocalStorage("lAddResultArray");

    var current_add_result = {
        user: array[i].user,
        email: array[i].email,
        modelo: array[i].modelo,
        cantidad: array[i].cantidad,
        ubicacion: array[i].ubicacion,
        fecha: array[i].fecha,
        tiempo: array[i].tiempo,
        estado: "Eliminado"
    }

    addResultArray1.push(current_add_result)
    localStorage.setItem("AlquileresEliminadosRegistros", JSON.stringify(addResultArray1));
}
*/
