function add() {
    var cliente = document.getElementById("cliente").value;
    var email = document.getElementById("email").value;
    var modelo = document.getElementById("modelo").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var fecha = String(document.getElementById("fecha").value);
    var tiempo = parseInt(document.getElementById("tiempo").value);

    addResultToStorage(cliente, email, modelo, cantidad, fecha, tiempo);
}

function addResultToStorage(cliente, email, modelo, cantidad, fecha, tiempo) {
    var addResultArray = [];

    if (localStorage.getItem("lAddResultArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("lAddResultArray"));
    }

    var current_add_result = {
        user: cliente,
        email: email,
        modelo: modelo,
        cantidad: cantidad,
        /*ubicacion: ubicacion,*/
        fecha: fecha,
        tiempo: tiempo
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("lAddResultArray", JSON.stringify(addResultArray));
}

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function actDatos() {
    var array = readArrayFromLocalStorage("lAddResultArray")
    var myTable = document.getElementById("tabla");
    for (var i = 0; i < array.length; i++) {
        var row = myTable.insertRow(1);

        row.insertCell(0).innerHTML = array[i].user;
        row.insertCell(1).innerHTML = array[i].email;
        row.insertCell(2).innerHTML = array[i].modelo;
        row.insertCell(3).innerHTML = array[i].cantidad;
        row.insertCell(4).innerHTML = "Ubicacion";
        row.insertCell(5).innerHTML = array[i].fecha;
        row.insertCell(6).innerHTML = array[i].tiempo;
    }
}