
function enviado() {
    alert("Formulario enviado con éxito.")
    window.location.href = '/principal';
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

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
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

checkFecha();