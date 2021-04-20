window.onload = cargar;


function cargar() {
    datos();
    cargarDatosTablaProy();
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


function registrosRecibidos() {
    var recibidos = readArrayFromLocalStorage("RegistrosRecibidos");
    var myTable = document.getElementById("tabla");
    var numRows = myTable.getElementsByTagName('tr').length - 1
    if (recibidos !== null) {
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
}

function registrosAceptados() {
    var aceptados = readArrayFromLocalStorage("AlquileresAceptadosRegistros");
    var myTable = document.getElementById("tabla");
    var numRows = myTable.getElementsByTagName('tr').length - 1
    if (aceptados !== null) {
        for (var i = 1; i <= numRows; i++) {
            user = myTable.rows.item(i).cells.item(0).innerHTML
            email = myTable.rows.item(i).cells.item(1).innerHTML
            modelo = myTable.rows.item(i).cells.item(2).innerHTML
            cantidad = myTable.rows.item(i).cells.item(3).innerHTML
            ubicacion = myTable.rows.item(i).cells.item(4).innerHTML
            fecha = myTable.rows.item(i).cells.item(5).innerHTML
            tiempo = myTable.rows.item(i).cells.item(6).innerHTML
            for (var j = 0; j < aceptados.length; j++) {
                if (user === aceptados[j].user && email === aceptados[j].email && modelo === aceptados[j].modelo && cantidad === String(aceptados[j].cantidad) && ubicacion === aceptados[j].ubicacion && fecha === aceptados[j].fecha && tiempo === String(aceptados[j].tiempo)) {
                    myTable.rows.item(i).cells.item(7).innerHTML = "Aceptado";
                }
            }
        }
    }
}

function registrosRechazados() {
    var rechazados = readArrayFromLocalStorage("AlquileresRechazadosRegistros");
    var myTable = document.getElementById("tabla");
    var numRows = myTable.getElementsByTagName('tr').length - 1
    if (rechazados !== null) {
        for (var i = 1; i <= numRows; i++) {
            user = myTable.rows.item(i).cells.item(0).innerHTML
            email = myTable.rows.item(i).cells.item(1).innerHTML
            modelo = myTable.rows.item(i).cells.item(2).innerHTML
            cantidad = myTable.rows.item(i).cells.item(3).innerHTML
            ubicacion = myTable.rows.item(i).cells.item(4).innerHTML
            fecha = myTable.rows.item(i).cells.item(5).innerHTML
            tiempo = myTable.rows.item(i).cells.item(6).innerHTML
            for (var j = 0; j < rechazados.length; j++) {
                if (user === rechazados[j].user && email === rechazados[j].email && modelo === rechazados[j].modelo && cantidad === String(rechazados[j].cantidad) && ubicacion === rechazados[j].ubicacion && fecha === rechazados[j].fecha && tiempo === String(rechazados[j].tiempo)) {
                    myTable.rows.item(i).cells.item(7).innerHTML = "Rechazado";
                }
            }
        }
    }
}

function cargarDatos() {
    var array = readArrayFromLocalStorage("lAddResultArray");
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
        document.getElementById("result_alquileres").innerHTML = "No se han realizado peticiones de alquiler."
    }
    registrosRecibidos();
    registrosAceptados();
    registrosRechazados();
}

function cargarDatosTablaProy() {
    var arrayProy = readArrayFromLocalStorage("lAddResultArrayPro");
    var myTableProy = document.getElementById("tablaProy");
    var numeroAlquileres = 0;
    if (arrayProy !== null) {
        for (var i = 0; i < arrayProy.length; i++) {
            if (arrayProy[i].user === document.getElementById("user_cliente").innerHTML) {
                var row = myTableProy.insertRow(1);
                row.insertCell(0).innerHTML = arrayProy[i].fec3;
                row.insertCell(1).innerHTML = arrayProy[i].tip;
                row.insertCell(2).innerHTML = arrayProy[i].nom;
                row.insertCell(3).innerHTML = arrayProy[i].cor;
                row.insertCell(4).innerHTML = arrayProy[i].num;
                row.insertCell(5).innerHTML = arrayProy[i].fec1;
                row.insertCell(6).innerHTML = arrayProy[i].fec2;
                row.insertCell(7).innerHTML = arrayProy[i].ubi;
                row.insertCell(8).innerHTML = "Enviado";
                numeroAlquileres++;
            }
        }
    }
    if (numeroAlquileres === 0) {
        document.getElementById("result_cotizaciones").innerHTML = "No se han realizado peticiones de cotizaciones."
    }
    registrosRecibidosCot();
    registrosAceptadosCot();
    registrosRechazadosCot();
}


function registrosRecibidosCot() {
    var recibidos = readArrayFromLocalStorage("RegistrosRecibidosCot");
    var myTable = document.getElementById("tablaProy");
    var numRows = myTable.getElementsByTagName('tr').length - 1
    if (recibidos !== null) {
        for (var i = 1; i <= numRows; i++) {
            fec3 = myTable.rows.item(i).cells.item(0).innerHTML
            tip = myTable.rows.item(i).cells.item(1).innerHTML
            nom = myTable.rows.item(i).cells.item(2).innerHTML
            cor = myTable.rows.item(i).cells.item(3).innerHTML
            num = myTable.rows.item(i).cells.item(4).innerHTML
            fec1 = myTable.rows.item(i).cells.item(5).innerHTML
            fec2 = myTable.rows.item(i).cells.item(6).innerHTML
            ubi = myTable.rows.item(i).cells.item(7).innerHTML
            for (var j = 0; j < recibidos.length; j++) {
                if (fec3 === recibidos[j].fec3 && tip === recibidos[j].tip && nom === recibidos[j].nom && cor === recibidos[j].cor && num === recibidos[j].num && fec1 === recibidos[j].fec1 && fec2 === recibidos[j].fec2 && ubi === recibidos[j].ubi) {
                    myTable.rows.item(i).cells.item(8).innerHTML = "Recibido";
                }
            }
        }
    }
}

function registrosAceptadosCot() {
    var aceptados = readArrayFromLocalStorage("CotizacionesAceptadasRegistros");
    var myTable = document.getElementById("tablaProy");
    var numRows = myTable.getElementsByTagName('tr').length - 1
    if (aceptados !== null) {
        for (var i = 1; i <= numRows; i++) {
            fec3 = myTable.rows.item(i).cells.item(0).innerHTML
            tip = myTable.rows.item(i).cells.item(1).innerHTML
            nom = myTable.rows.item(i).cells.item(2).innerHTML
            cor = myTable.rows.item(i).cells.item(3).innerHTML
            num = myTable.rows.item(i).cells.item(4).innerHTML
            fec1 = myTable.rows.item(i).cells.item(5).innerHTML
            fec2 = myTable.rows.item(i).cells.item(6).innerHTML
            ubi = myTable.rows.item(i).cells.item(7).innerHTML
            for (var j = 0; j < aceptados.length; j++) {
                if (fec3 === aceptados[j].fec3 && tip === aceptados[j].tip && nom === aceptados[j].nom && cor === aceptados[j].cor && num === aceptados[j].num && fec1 === aceptados[j].fec1 && fec2 === aceptados[j].fec2 && ubi === aceptados[j].ubi) {
                    myTable.rows.item(i).cells.item(8).innerHTML = "Aceptado";
                }
            }
        }
    }
}

function registrosRechazadosCot() {
    var rechazados = readArrayFromLocalStorage("CotizacionesRechazadasRegistros");
    var myTable = document.getElementById("tablaProy");
    var numRows = myTable.getElementsByTagName('tr').length - 1
    if (rechazados !== null) {
        for (var i = 1; i <= numRows; i++) {
            fec3 = myTable.rows.item(i).cells.item(0).innerHTML
            tip = myTable.rows.item(i).cells.item(1).innerHTML
            nom = myTable.rows.item(i).cells.item(2).innerHTML
            cor = myTable.rows.item(i).cells.item(3).innerHTML
            num = myTable.rows.item(i).cells.item(4).innerHTML
            fec1 = myTable.rows.item(i).cells.item(5).innerHTML
            fec2 = myTable.rows.item(i).cells.item(6).innerHTML
            ubi = myTable.rows.item(i).cells.item(7).innerHTML
            for (var j = 0; j < rechazados.length; j++) {
                if (fec3 === rechazados[j].fec3 && tip === rechazados[j].tip && nom === rechazados[j].nom && cor === rechazados[j].cor && num === rechazados[j].num && fec1 === rechazados[j].fec1 && fec2 === rechazados[j].fec2 && ubi === rechazados[j].ubi) {
                    myTable.rows.item(i).cells.item(8).innerHTML = "Rechazado";
                }
            }
        }
    }
}

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar_responsive");
        sidebarOpen = true;
    }
}


function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar_responsive");
        sidebarOpen = false;
    }
}

function toggleVideo() {
    var videom = document.getElementById("navbar_v");
    videom.classList.toggle("active_link");
}

function logout() {
    sessionStorage.removeItem("perfilActual")
}