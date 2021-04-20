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
        row.insertCell(10).innerHTML = "<button onclick='modificarCotizacion(" + index + ")'>Modificar</button><input type='hidden' id='" + index + "'>";
        row.insertCell(11).innerHTML = "<button onclick='aceptarCotizacion(" + index + ")'>Aceptar</button><input type='hidden' id='" + index + "'>";
        row.insertCell(12).innerHTML = "<button onclick='rechazarCotizacion(" + index + ")'>Rechazar</button><input type='hidden' id='" + index + "'>";
        addResultArrayPro[index].estado = "Recibido";
        index++;
        addResultToStorageRegistrosRecibidos(addResult.fec3, addResult.tip, addResult.cli, addResult.nom, addResult.cor, addResult.num, addResult.fec1, addResult.fec2, addResult.ubi, addResult.desc)

    }
    cargarAceptados();
    cargarRechazados();

}

function modificarCotizacion(pIndex) {
    var element = document.getElementById(pIndex)
    var parent = getElementParent(element, 2)
    console.log(parent.children)
    var children = parent.children
    if (children[1].innerText === "| Eléctrico") {
        children[1].innerHTML = "<input type='checkbox' id='Eléctrico' name='Coti' checked><label for 'CotiCivil'> Eléctrico </label> <br><input type='checkbox' id='Civil' name='Coti'><label for 'CotiCivil'> Civil </label> <br><input type='checkbox' id='Poda' name='Coti'><label for 'CotiPoda'> Poda </label>"
    }
    if (children[1].innerText === "| Civil") {
        children[1].innerHTML = "<input type='checkbox' id='Eléctrico' name='Coti'><label for 'CotiCivil'> Eléctrico </label> <br><input type='checkbox' id='Civil' name='Coti' checked><label for 'CotiCivil'> Civil </label> <br><input type='checkbox' id='Poda' name='Coti'><label for 'CotiPoda'> Poda </label>"
    }
    if (children[1].innerText === "| Poda") {
        children[1].innerHTML = "<input type='checkbox' id='Eléctrico' name='Coti'><label for 'CotiCivil'> Eléctrico </label> <br><input type='checkbox' id='Civil' name='Coti'><label for 'CotiCivil'> Civil </label> <br><input type='checkbox' id='Poda' name='Coti' checked><label for 'CotiPoda'> Poda </label>"
    }
    if (children[2].innerText === "Natural") {
        children[2].innerHTML = "<input type='radio' id='Natural' name='Cliente' checked><label for 'ClienteNat'> Persona natural </label> <br><input type='radio' id='Empresa' name='Cliente'><label for 'ClienteEmp'> Empresa </label>"
    }
    if (children[2].innerText === "Empresa") {
        children[2].innerHTML = "<input type='radio' id='Natural' name='Cliente'><label for 'ClienteNat'> Persona natural </label> <br><input type='radio' id='Empresa' name='Cliente' checked><label for 'ClienteEmp'> Empresa </label>"
    }
    children[5].innerHTML = "<input type='number' id='numero" + pIndex + "' value='" + children[5].innerText + "'>"
    children[6].innerHTML = "<input type='date' id='fecha1" + pIndex + "' value='" + children[6].innerText + "'>"
    children[7].innerHTML = "<input type='date' id='fecha2" + pIndex + "' value='" + children[7].innerText + "'>"
    children[8].innerHTML = "<input type='text' id='ubicacion" + pIndex + "' value='" + children[8].innerText + "'>"
    children[9].innerHTML = "<input type='text' id='descripcion" + pIndex + "' value='" + children[9].innerText + "'>"
    children[10].innerHTML = "<button onclick='modifyOffElementByIndex(" + pIndex + ",1)'>Guardar</button><button onclick='modifyOffElementByIndex(" + pIndex + ",0)'>Regresar</button><input type='hidden' id='" + pIndex + "'>"
}

function modifyOffElementByIndex(pIndex, pSave) {
    var addResultArray
    if (localStorage.getItem("lAddResultArrayPro") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("lAddResultArrayPro"));
    }

    var element = document.getElementById(pIndex)
    var parent = getElementParent(element, 2)
    var children = parent.children

    if (pSave === 0) {
        //modify off
        children[1].innerHTML = addResultArray[pIndex].tip
        children[2].innerHTML = addResultArray[pIndex].cli
        children[5].innerHTML = addResultArray[pIndex].num
        children[6].innerHTML = addResultArray[pIndex].fec1
        children[7].innerHTML = addResultArray[pIndex].fec2
        children[8].innerHTML = addResultArray[pIndex].ubi
        children[9].innerHTML = addResultArray[pIndex].desc
        children[10].innerHTML = "<button onclick='modificarCotizacion(" + pIndex + ")'>Modificar</button><input type='hidden' id='" + pIndex + "'>";
    } else {
        //save
        var servicioArray = document.getElementsByName("Coti");
        var input1 = "";
        var length = servicioArray.length;
        for (var i = 0; i < length; i++) {
            if (servicioArray[i].checked) {
                input1 += " | " + servicioArray[i].id;
            }
        }

        var radios = document.getElementsByName('Cliente');
        var input2 = "";
        for (var n = 0, length = radios.length; n < length; n++) {
            if (radios[n].checked) {
                input2 = radios[n].id;
                break;
            }
        }

        var input3 = document.getElementById("numero" + pIndex).value
        var input4 = document.getElementById("fecha1" + pIndex).value
        var input5 = document.getElementById("fecha2" + pIndex).value
        var input6 = document.getElementById("ubicacion" + pIndex).value
        var input7 = document.getElementById("descripcion" + pIndex).value

        addResultArray[pIndex].tip = input1
        addResultArray[pIndex].cli = input2
        addResultArray[pIndex].num = input3
        addResultArray[pIndex].fec1 = input4
        addResultArray[pIndex].fec2 = input5
        addResultArray[pIndex].ubi = input6
        addResultArray[pIndex].desc = input7

        children[1].innerHTML = input1
        children[2].innerHTML = input2
        children[5].innerHTML = input3
        children[6].innerHTML = input4
        children[7].innerHTML = input5
        children[8].innerHTML = input6
        children[9].innerHTML = input7
        children[10].innerHTML = "<button onclick='modificarCotizacion(" + pIndex + ")'>Modificar</button><input type='hidden' id='" + pIndex + "'>";

        localStorage.setItem("lAddResultArrayPro", JSON.stringify(addResultArray))
    }
}

function aceptarCotizacion(i) {
    var myTable = document.getElementById("userTableClient");
    var j = myTable.getElementsByTagName('tr').length - 1 - i;
    var row = myTable.rows[j];
    row.style.backgroundColor = "#86db72";
    myTable.rows[j].cells[10].colSpan = 3;
    myTable.rows[j].cells[10].innerHTML = "Aceptado";
    myTable.rows[j].deleteCell(12);
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
            myTable.rows[j].deleteCell(12);
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
    myTable.rows[j].deleteCell(12);
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
            myTable.rows[j].deleteCell(12);
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

function getElementParent(pElement, pGen) {
    var parent = pElement
    for (var i = 0; i < pGen; i++) {
        parent = parent.parentNode
    }
    return parent
}