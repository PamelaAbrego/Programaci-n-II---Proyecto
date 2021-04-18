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
        row.insertCell(12).innerHTML = "<button onclick='eliminarCotizacion(" + index + ")'>Eliminar</button><input type='hidden' id='" + index + "'>";
        addResultArrayPro[index].estado = "Recibido";
        index++;
        addResultToStorageRegistrosRecibidos(addResult.fec3, addResult.tip, addResult.cli, addResult.nom, addResult.cor, addResult.num, addResult.fec1, addResult.fec2, addResult.ubi, addResult.desc)

    }

}

function deleteElementByIndex(pIndex) {
    var comprobacion = confirm("Confirmas elminar esta solicitud de cotización?");
    if (comprobacion == true) {
        deleteElementFromLocalStorage(pIndex);
        deleteElementFromTable(pIndex);
    }
}

function deleteElementFromLocalStorage(pIndex) {
    var addResultArrayPro = JSON.parse(localStorage.getItem("lAddResultArrayPro"));
    addResultArrayPro.splice(pIndex, 1);
    localStorage.setItem("lAddResultArrayPro", JSON.stringify(addResultArrayPro));
}

function deleteElementFromTable(pIndex) {
    var element = document.getElementById(pIndex);
    var parent = getElementParent(element, 3);
    var child = getElementParent(element, 2);
    parent.removeChild(child);
}


function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
}

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}
