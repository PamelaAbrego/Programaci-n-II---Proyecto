
function enviado() {
    document.getElementById("resultado_enviar").innerHTML = "Formluario enviado";
}


function add() {
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

    enviado();

    comprobarDatos();
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

function Prueba() {
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
    if (1 <= txt <= 2) {
        document.getElementById("modelo").innerHTML = "";
        return 0;
    }
    else if (txt > 2 && txt < 1) {
        document.getElementById("modelo").innerHTML = "Escriba un valor de 1 o 2 en el modelo";
        return 1;
    }
}

function checkGruas() {
    var txt = document.getElementById("cantidad").value;
    if (1 <= txt <= 10) {
        document.getElementById("cantidad").innerHTML = "";
        return 0;
    }
    else if (txt > 10 && txt < 1) {
        document.getElementById("cantidad").innerHTML = "No se pueden ingresar valores negativos, cero o mayores que 10";
        return 1;
    }
}

function checkUbicacion() {
    var txt = document.getElementById("ubicacion").value;
    if (txt === "") {
        document.getElementById("ubicacion").innerHTML = "Este campo es obligatorio";
        return 1;
    }
    else {
        document.getElementById("ubicacion").innerHTML = "";
        return 0;
    }

}

function checkTiempo() {
    var txt = document.getElementById("tiempo").value;
    if (1 <= txt <= 240) {
        document.getElementById("tiempo").innerHTML = "";
        return 0;
    }
    else if (txt > 240 && txt < 1) {
        document.getElementById("tiempo").innerHTML = "No se pueden ingresar valores negativos, cero o mayores que 10";
        return 1;
    }
}

function comprobarDatos() {
    var modelo = checkModelo();
    var grua = checkGruas();
    var ubicacion = checkUbicacion();
    var tiempo = checkTiempo();
    var suma = modelo + grua + ubicacion + tiempo;
    if (suma == 0) {
        alert("Tu formulario de cotización se ha enviado correctamente.");
        alert("COMSEDI se contactará contigo en las próximas 48 horas.");
        leerDatos();
        window.location.href = '/';
    }
}

Prueba()



