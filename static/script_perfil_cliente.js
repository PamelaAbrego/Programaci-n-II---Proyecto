function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function registrosRecibidos() {
    var arrayRecibidos = readArrayFromLocalStorage("RegistrosRecibidos");
    var array = readArrayFromLocalStorage("lAddResultArray");
    var myTable = document.getElementById("tabla");

    for (var i = 0; i < arrayRecibidos.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if ((arrayRecibidos[i].user == array[j].user) && (arrayRecibidos[i].email == array[j].email) && (arrayRecibidos[i].modelo == array[j].modelo) && (arrayRecibidos[i].cantidad == array[j].cantidad) && (arrayRecibidos[i].ubicacion == array[j].ubicacion) && (arrayRecibidos[i].fecha == array[j].fecha) && (arrayRecibidos[i].tiempo == array[j].tiempo)) {
                myTable.rows.item(array.length - j).cells.item(7).innerHTML = "Recibido"
            }
        }
    }
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
        row.insertCell(4).innerHTML = array[i].ubicacion;
        row.insertCell(5).innerHTML = array[i].fecha;
        row.insertCell(6).innerHTML = array[i].tiempo;
        row.insertCell(7).innerHTML = "Enviado";
    }
    registrosRecibidos();
}