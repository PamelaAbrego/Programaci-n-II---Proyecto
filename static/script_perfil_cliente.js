window.onload = cargar;

function cargar() {
    datos();
    cargarDatos();
}
function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
}

function datos() {
    var perfilActual = readArrayFromSessionStorage("perfilActual");
    document.getElementById("user_cliente").innerHTML = perfilActual.user;
    document.getElementById("email_cliente").innerHTML = perfilActual.email;
}

function buscarRecibidos() {
    var arrayRecibidos = readArrayFromLocalStorage("RegistrosRecibidos");
    var array = readArrayFromLocalStorage("lAddResultArray");
    var recibidos = []
    if (arrayRecibidos !== null) {
        for (var j = 1; j < array.length; j++) {
            for (var i = 0; i < arrayRecibidos.length; i++) {
                if ((arrayRecibidos[i].user == array[j].user) && (arrayRecibidos[i].email == array[j].email) && (arrayRecibidos[i].modelo == array[j].modelo) && (arrayRecibidos[i].cantidad == array[j].cantidad) && (arrayRecibidos[i].ubicacion == array[j].ubicacion) && (arrayRecibidos[i].fecha == array[j].fecha) && (arrayRecibidos[i].tiempo == array[j].tiempo)) {
                    recibidos.push(arrayRecibidos[i])
                }
            }
        }
    }
    return recibidos
}

function registrosRecibidos() {
    var recibidos = readArrayFromLocalStorage("RegistrosRecibidos");
    var myTable = document.getElementById("tabla");
    var numRows = myTable.getElementsByTagName('tr').length - 1

    for (var i = 1; i <= numRows; i++) {
        user = myTable.rows.item(i).cells.item(0).innerHTML
        email = myTable.rows.item(i).cells.item(1).innerHTML
        modelo = myTable.rows.item(i).cells.item(2).innerHTML
        cantidad = myTable.rows.item(i).cells.item(3).innerHTML
        ubicacion = myTable.rows.item(i).cells.item(4).innerHTML
        fecha = myTable.rows.item(i).cells.item(5).innerHTML
        tiempo = myTable.rows.item(i).cells.item(6).innerHTML
        for (var j = 0; j < recibidos.length; j++) {
            if (user === recibidos[j].user && email === recibidos[j].email && modelo === recibidos[j].modelo && cantidad === String(recibidos[j].cantidad) && ubicacion === recibidos[j].ubicacion && fecha === recibidos[j].fecha && tiempo === String(recibidos[j].tiempo)) {
                myTable.rows.item(i).cells.item(7).innerHTML = "Recibido";
            }
        }
    }
}

function cargarDatos() {
    var array = readArrayFromLocalStorage("lAddResultArray");
    var recibidos = readArrayFromLocalStorage("RegistrosRecibidos");
    var myTable = document.getElementById("tabla");
    var numeroAlquileres = 0;
    if (array !== null) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].user === document.getElementById("user_cliente").innerHTML) {
                var row = myTable.insertRow(1);
                row.insertCell(0).innerHTML = array[i].user;
                row.insertCell(1).innerHTML = array[i].email;
                row.insertCell(2).innerHTML = array[i].modelo;
                row.insertCell(3).innerHTML = array[i].cantidad;
                row.insertCell(4).innerHTML = array[i].ubicacion;
                row.insertCell(5).innerHTML = array[i].fecha;
                row.insertCell(6).innerHTML = array[i].tiempo;
                row.insertCell(7).innerHTML = "Enviado";
                numeroAlquileres++;
            }
        }
    }
    if (numeroAlquileres === 0) {
        alert("No has realizado peticiones de alquiler")
    }
    registrosRecibidos();
}
