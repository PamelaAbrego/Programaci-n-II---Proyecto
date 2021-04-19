function addResultToStorageRegistrosRecibidos(date3, type, client, name, mail, number, date1, date2, location, description) {
    var addResultArray = [];

    if (localStorage.getItem("RegistrosRecibidosCot") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("RegistrosRecibidosCot"));
    }

    var current_add_result = {
        fec3: date3,
        tip: type,
        cli: client,
        nom: name,
        cor: mail,
        num: number,
        fec1: date1,
        fec2: date2,
        ubi: location,
        desc: description,
        estado: "Recibido"
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("RegistrosRecibidosCot", JSON.stringify(addResultArray));
}

function loadAddDataFromAllUsers() {
    var addResultArrayPro;
    if (localStorage.getItem("lAddResultArrayPro") !== null) {
        addResultArrayPro = JSON.parse(localStorage.getItem("lAddResultArrayPro"));
    }

    var userTableClient = document.getElementById("userTableClient");
    var row;
    var index = 0;

    for (var addResult of addResultArrayPro) {
        row = userTableClient.insertRow(1)

        row.insertCell(0).innerHTML = addResult.fec3;
        row.insertCell(1).innerHTML = addResult.tip;
        row.insertCell(2).innerHTML = addResult.cli;
        row.insertCell(3).innerHTML = addResult.nom;
        row.insertCell(4).innerHTML = addResult.cor;
        row.insertCell(5).innerHTML = addResult.num;
        row.insertCell(6).innerHTML = addResult.fec1;
        row.insertCell(7).innerHTML = addResult.fec2;
        row.insertCell(8).innerHTML = addResult.ubi;
        row.insertCell(9).innerHTML = addResult.desc;
        row.insertCell(10).innerHTML = "<button onclick='aceptarCotizacion(" + index + ")'>Aceptar</button><input type='hidden' id='" + index + "'>";
        row.insertCell(11).innerHTML = "<button onclick='rechazarCotizacion(" + index + ")'>Rechazar</button><input type='hidden' id='" + index + "'>";
        addResultArrayPro[index].estado = "Recibido";
        index++;
        addResultToStorageRegistrosRecibidos(addResult.fec3, addResult.tip, addResult.cli, addResult.nom, addResult.cor, addResult.num, addResult.fec1, addResult.fec2, addResult.ubi, addResult.desc)

    }
    cargarAceptados();
    cargarRechazados();

}

function aceptarCotizacion(i) {
    var myTable = document.getElementById("userTableClient");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#86db72";
    myTable.rows[j].cells[10].colSpan = 3;
    myTable.rows[j].cells[10].innerHTML = "Aceptado";
    myTable.rows[j].deleteCell(11);
    cotizacionesAceptadas(i);
}

function cotizacionesAceptadas(i) {
    var addResultArray = [];

    if (localStorage.getItem("CotizacionesAceptadas") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("CotizacionesAceptadas"));
    }

    var current_add_result = {
        id: i
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("CotizacionesAceptadas", JSON.stringify(addResultArray));


    var addResultArray1 = [];

    if (localStorage.getItem("CotizacionesAceptadasRegistros") !== null) {
        addResultArray1 = JSON.parse(localStorage.getItem("CotizacionesAceptadasRegistros"));
    }
    var array = readArrayFromLocalStorage("lAddResultArrayPro");

    var current_add_result = {
        fec3: array[i].fec3,
        tip: array[i].tip,
        cli: array[i].cli,
        nom: array[i].nom,
        cor: array[i].cor,
        num: array[i].num,
        fec1: array[i].fec1,
        fec2: array[i].fec2,
        ubi: array[i].ubi,
        desc: array[i].desc,
        estado: "Aceptado"
    }

    addResultArray1.push(current_add_result)
    localStorage.setItem("CotizacionesAceptadasRegistros", JSON.stringify(addResultArray1));

}

function cargarAceptados() {
    var aceptados = readArrayFromLocalStorage("CotizacionesAceptadas");
    if (aceptados !== null) {
        var myTable = document.getElementById("userTableClient");
        for (var k = 0; k < aceptados.length; k++) {
            var i = aceptados[k].id;
            var j = myTable.getElementsByTagName('tr').length - 1 - i;
            var row = myTable.rows[j];
            row.style.backgroundColor = "#86db72";
            myTable.rows[j].cells[10].colSpan = 3;
            myTable.rows[j].cells[10].innerHTML = "Aceptado";
            myTable.rows[j].deleteCell(11);
        }
    }
}

function rechazarCotizacion(i) {
    var myTable = document.getElementById("userTableClient");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#FF8066";
    myTable.rows[j].cells[10].colSpan = 3;
    myTable.rows[j].cells[10].innerHTML = "Rechazado";
    myTable.rows[j].deleteCell(11);
    cotizacionesRechazadas(i);
}

function cotizacionesRechazadas(i) {
    var addResultArray = [];

    if (localStorage.getItem("CotizacionesRechazadas") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("CotizacionesRechazadas"));
    }

    var current_add_result = {
        id: i
    }

    addResultArray.push(current_add_result)
    localStorage.setItem("CotizacionesRechazadas", JSON.stringify(addResultArray));

    var addResultArray1 = [];

    if (localStorage.getItem("CotizacionesRechazadasRegistros") !== null) {
        addResultArray1 = JSON.parse(localStorage.getItem("CotizacionesRechazadasRegistros"));
    }
    var array = readArrayFromLocalStorage("lAddResultArrayPro");

    var current_add_result = {
        fec3: array[i].fec3,
        tip: array[i].tip,
        cli: array[i].cli,
        nom: array[i].nom,
        cor: array[i].cor,
        num: array[i].num,
        fec1: array[i].fec1,
        fec2: array[i].fec2,
        ubi: array[i].ubi,
        desc: array[i].desc,
        estado: "Rechazado"
    }

    addResultArray1.push(current_add_result)
    localStorage.setItem("CotizacionesRechazadasRegistros", JSON.stringify(addResultArray1));
}


function cargarRechazados() {
    var rechazados = readArrayFromLocalStorage("CotizacionesRechazadas");
    if (rechazados !== null) {
        var myTable = document.getElementById("userTableClient");
        for (var k = 0; k < rechazados.length; k++) {
            var i = rechazados[k].id;
            var j = myTable.getElementsByTagName('tr').length - 1 - i;
            var row = myTable.rows[j];
            row.style.backgroundColor = "#FF8066";
            myTable.rows[j].cells[10].colSpan = 3;
            myTable.rows[j].cells[10].innerHTML = "Rechazado";
            myTable.rows[j].deleteCell(11);
        }
    }
}

function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
}

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}
