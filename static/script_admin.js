
function enviado() {
    document.getElementById("resultado_enviar").innerHTML = "Formluario enviado";
}


function add() {
    var suma = comprobarDatos();
    if (suma === 0) {
        var perfilActual = readArrayFromSessionStorage("perfilActual");
        var cliente = perfilActual.user;
        var email = perfilActual.email;
        var modelo = document.getElementById("modelo").value;
        var cantidad = parseInt(document.getElementById("cantidad").value);
        var ubicacion = document.getElementById("ubicacion").value;
        var fecha = String(document.getElementById("fecha").value);
        var tiempo = parseInt(document.getElementById("tiempo").value);
        var estado = "Enviado";
        addResultToStorage(cliente, email, modelo, cantidad, ubicacion, fecha, tiempo, estado);
    }
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
        array[i].estado = "Recibido"

        addResultToStorageRegistrosRecibidos(array[i].user, array[i].email, array[i].modelo, array[i].cantidad, array[i].ubicacion, array[i].fecha, array[i].tiempo)
    }
}

function checkFecha() {
    var d = new Date();
    var year = d.getFullYear();
    var day = d.getDate();
    var month = d.getMonth() + 1;

    if (month >= 10) {
        if (day < 10) {
            day = "0" + day.toString();
        }
        var fecha = year.toString() + "-" + month + "-" + day.toString();
        document.getElementById("fecha").setAttribute("min", fecha);
    }

    else {
        if (day < 10) {
            day = "0" + day.toString();
        }
        var fecha = year.toString() + "-0" + month + "-" + day.toString();
        document.getElementById("fecha").setAttribute("min", fecha);
    }
}

function checkModelo() {
    var txt = document.getElementById("modelo").value;
    if (txt === "") {
        document.getElementById("r_modelo").innerHTML = "Este campo es obligatorio.";
        return 1;
    } else {
        document.getElementById("r_modelo").innerHTML = "";
        return 0;
    }
}

function checkGruas() {
    var txt = document.getElementById("cantidad").value;
    if (txt === "") {
        document.getElementById("r_cantidad").innerHTML = "Este campo es obligatorio.";
        return 1;
    } else {
        document.getElementById("r_cantidad").innerHTML = "";
        return 0;
    }

}

function checkUbicacion() {
    var txt = document.getElementById("ubicacion").value;
    if (txt === "") {
        document.getElementById("r_ubicacion").innerHTML = "Este campo es obligatorio.";
        return 1;
    } else {
        document.getElementById("r_ubicacion").innerHTML = "";
        return 0;
    }
}

function checkTiempo() {
    var txt = document.getElementById("tiempo").value;
    if (txt === "") {
        document.getElementById("r_tiempo").innerHTML = "Este campo es obligatorio.";
        return 1;
    } else {
        document.getElementById("r_tiempo").innerHTML = "";
        return 0;
    }
}

function checkDate() {
    var txt = document.getElementById("fecha").value;
    if (txt === "") {
        document.getElementById("r_fecha").innerHTML = "Este campo es obligatorio.";
        return 1;
    } else {
        document.getElementById("r_fecha").innerHTML = "";
        return 0;
    }
}
function comprobarDatos() {
    var suma = 0;
    var modelo = checkModelo();
    var grua = checkGruas();
    var ubicacion = checkUbicacion();
    var tiempo = checkTiempo();
    var fecha = checkDate();
    suma = modelo + grua + ubicacion + tiempo + fecha;
    if (suma === 0) {
        enviado();
    }
    return suma;
}

checkFecha()



