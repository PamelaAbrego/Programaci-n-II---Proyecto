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
        row.insertCell(7).innerHTML = "<button onclick='modificarAlquiler(" + i + ")'>Modificar</button><input type='hidden' id='" + i + "'>";
        row.insertCell(8).innerHTML = "<button onclick='aceptarAlquiler(" + i + ")'>Aceptar</button>";
        row.insertCell(9).innerHTML = "<button onclick='rechazarAlquiler(" + i + ")'>Rechazar</button>";
        array[i].estado = "Recibido"

        addResultToStorageRegistrosRecibidos(array[i].user, array[i].email, array[i].modelo, array[i].cantidad, array[i].ubicacion, array[i].fecha, array[i].tiempo)
    }
    cargarAceptados();
    cargarRechazados();
}

function aceptarAlquiler(i) {
    var myTable = document.getElementById("tabla");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#86db72";
    myTable.rows[j].cells[7].colSpan = 3;
    myTable.rows[j].cells[7].innerHTML = "Aceptado";
    myTable.rows[j].deleteCell(9);
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
            myTable.rows[j].deleteCell(9);
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
    myTable.rows[j].deleteCell(9);
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
            myTable.rows[j].deleteCell(9);
            myTable.rows[j].deleteCell(8);
            myTable.rows[j].cells[7].colSpan = 3;
        }
    }
}

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

function modificarAlquiler(pIndex) {
    var element = document.getElementById(pIndex)
    var parent = getElementParent(element, 2)
    console.log(parent.children)
    var children = parent.children
    children[2].innerHTML = "<input type='number' id='modelo" + pIndex + "' min='1' max='2' value='" + children[2].innerText + "'>"
    children[3].innerHTML = "<input type='number' id='cantidad" + pIndex + "' min='1' max='10' value='" + children[3].innerText + "'>"
    children[4].innerHTML = "<input type='text' id='ubicacion" + pIndex + "' value='" + children[4].innerText + "'>"
    children[5].innerHTML = "<input type='date' id='fecha" + pIndex + "' value='" + children[5].innerText + "'>"
    children[6].innerHTML = "<input type='number' id='tiempo" + pIndex + "' min='1' max='240' value='" + children[6].innerText + "'>"
    children[7].innerHTML = "<button onclick='modifyOffElementByIndex(" + pIndex + ",1)'>Guardar</button><button onclick='modifyOffElementByIndex(" + pIndex + ",0)'>Regresar</button><input type='hidden' id='" + pIndex + "'>"
}

function modifyOffElementByIndex(pIndex, pSave) {
    var addResultArray
    if (localStorage.getItem("lAddResultArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("lAddResultArray"));
    }

    var element = document.getElementById(pIndex)
    var parent = getElementParent(element, 2)
    var children = parent.children

    if (pSave === 0) {
        //modify off
        children[2].innerHTML = addResultArray[pIndex].modelo
        children[3].innerHTML = addResultArray[pIndex].cantidad
        children[4].innerHTML = addResultArray[pIndex].ubicacion
        children[5].innerHTML = addResultArray[pIndex].fecha
        children[6].innerHTML = addResultArray[pIndex].tiempo
        children[7].innerHTML = "<button onclick='modificarAlquiler(" + pIndex + ")'>Modificar</button><input type='hidden' id='" + pIndex + "'>";
    } else {
        //save
        var input1 = document.getElementById("modelo" + pIndex).value
        var input2 = document.getElementById("cantidad" + pIndex).value
        var input3 = document.getElementById("ubicacion" + pIndex).value
        var input4 = document.getElementById("fecha" + pIndex).value
        var input5 = document.getElementById("tiempo" + pIndex).value

        addResultArray[pIndex].modelo = input1
        addResultArray[pIndex].cantidad = input2
        addResultArray[pIndex].ubicacion = input3
        addResultArray[pIndex].fecha = input4
        addResultArray[pIndex].tiempo = input5

        children[2].innerHTML = input1
        children[3].innerHTML = input2
        children[4].innerHTML = input3
        children[5].innerHTML = input4
        children[6].innerHTML = input5
        children[7].innerHTML = "<button onclick='modificarAlquiler(" + pIndex + ")'>Modificar</button><input type='hidden' id='" + pIndex + "'>";

        localStorage.setItem("lAddResultArray", JSON.stringify(addResultArray))
    }
}

function getElementParent(pElement, pGen) {
    var parent = pElement
    for (var i = 0; i < pGen; i++) {
        parent = parent.parentNode
    }
    return parent
}