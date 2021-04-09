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
        document.getElementById("datemin").setAttribute("min", fecha);
        document.getElementById("datef").setAttribute("min", fecha);
    }

    else {
        if (day < 10) {
            day = "0" + day.toString();
        }
        var fecha = year.toString() + "-0" + month + "-" + day.toString();
        document.getElementById("datemin").setAttribute("min", fecha);
        document.getElementById("datef").setAttribute("min", fecha);
    }
}


function checkInputCheckBox() {
    var servicioArray = document.getElementsByName("Coti");
    var n = 0;
    var length = servicioArray.length;
    for (var i = 0; i < length; i++) {
        if (servicioArray[i].checked) {
            n = n + 1;
        }
    }
    if (n == 0) {
        document.getElementById("sCoti").innerHTML = "Este campo es obligatorio";
        return 1;

    }
    else {
        document.getElementById("sCoti").innerHTML = "";
        return 0;
    }


}

function checkRadio() {
    var tipoArray = document.getElementsByName("Cliente");
    var n = 0;
    length = tipoArray.length;
    for (var i = 0; i < length; i++) {
        if (tipoArray[i].checked) {
            n = n + 1;
        }
    }
    if (n == 0) {
        document.getElementById("sClien").innerHTML = "Este campo es obligatorio";
        return 1;
    }
    else {
        document.getElementById("sClien").innerHTML = "";
        return 0;
    }
}

function checkUbicacion() {
    var txt = document.getElementById("floc").value;
    if (txt === "") {
        document.getElementById("sLoc").innerHTML = "Este campo es obligatorio";
        return 1;
    }
    else {
        document.getElementById("sLoc").innerHTML = "";
        return 0;
    }

}

function checkNombre() {
    var txt = document.getElementById("fname").value;
    if (txt === "") {
        document.getElementById("sName").innerHTML = "Este campo es obligatorio";
        return 1;

    }
    else {
        document.getElementById("sName").innerHTML = "";
        return 0;

    }
}

function checkCorreo() {
    var txt = document.getElementById("fmail").value;
    if (txt === "") {
        document.getElementById("sMail").innerHTML = "Este campo es obligatorio";
        return 1;

    }
    else {
        document.getElementById("sMail").innerHTML = "";
        return 0;
    }

}

function checkNumero() {
    var txt = document.getElementById("fphone").value;
    if (txt.length == 8) {
        document.getElementById("sPhone").innerHTML = "";
        return 0;
    }
    else if (txt.length == 0) {
        document.getElementById("sPhone").innerHTML = "Este campo es obligatorio";
        return 1;
    }
    else {
        document.getElementById("sPhone").innerHTML = "Ingresa un número de 8 dígitos";
        return 1;
    }

}

function checkDescription() {
    var txt = document.getElementById("detalles");
    if (txt.value == " " || txt.value.length == 0) {
        document.getElementById("sDesc").innerHTML = "Este campo es obligatorio";
        return 1;
    }
    else {
        document.getElementById("sDesc").innerHTML = "";
        return 0;
    }

}

function comprobarDatos() {
    var cot = checkInputCheckBox();
    var cli = checkRadio();
    var ubi = checkUbicacion();
    var nom = checkNombre();
    var cor = checkCorreo();
    var num = checkNumero();
    var desc = checkDescription();
    var suma = cot + cli + ubi + nom + cor + num + desc;
    if (suma == 0) {
        leerDatos();
        alert("Tu formulario de cotización se ha enviado correctamente.");
        alert("COMSEDI se contactará contigo en las próximas 48 horas.");
        window.location.href = '/principal';
    }
}

function leerDatos() {
    var servicioArray = document.getElementsByName("Coti");
    var tipo = "";
    var length = servicioArray.length;
    for (var i = 0; i < length; i++) {
        if (servicioArray[i].checked) {
            tipo += " | " + servicioArray[i].id;
        }
    }
    var radios = document.getElementsByName('Cliente');
    var cliente = "";
    for (var n = 0, length = radios.length; n < length; n++) {
        if (radios[n].checked) {
            cliente = radios[n].id;
            break;
        }
    }
    var nombre = document.getElementById('fname').value;
    var correo = document.getElementById('fmail').value;
    var numero = document.getElementById('fphone').value;
    var fecha1 = document.getElementById('datemin').value;
    var fecha2 = document.getElementById('datef').value;
    var ubicacion = document.getElementById('floc').value;
    var descripcion = document.getElementById('detalles').value;
    var d1 = new Date();
    var year1 = d1.getFullYear();
    var day1 = d1.getDate();
    var month1 = d1.getMonth() + 1;
    var hour1 = d1.getHours();
    var med = "";

    if (hour1 == 0) {
        hour1 = 12;
        med = "am";

    }
    else if (hour1 <= 12) {
        med = "am";
    }

    else {
        hour1 = hour1 - 12;
        med = "pm";
    }


    var min = d1.getMinutes()

    if (min < 10) {
        min = "0" + min.toString();
    }

    var fecha3 = year1.toString() + "-" + month1 + "-" + day1.toString() + " // " + hour1.toString() + ":" + min.toString() + " " + med;

    var perfilActual = readArrayFromSessionStorage("perfilActual");
    var cliente1 = perfilActual.user;



    AddResult(fecha3, tipo, cliente, nombre, correo, numero, fecha1, fecha2, ubicacion, descripcion, cliente1);
}


function AddResult(date3, type, client, name, mail, number, date1, date2, location, description, userAct) {
    var AddResultArrayPro = [];

    if (localStorage.getItem("lAddResultArrayPro") !== null) {
        AddResultArrayPro = JSON.parse(localStorage.getItem("lAddResultArrayPro"));
    }

    var current_add_resultPro = {
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
        user: userAct
    }

    AddResultArrayPro.push(current_add_resultPro);
    localStorage.setItem("lAddResultArrayPro", JSON.stringify(AddResultArrayPro));
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
        row.insertCell(10).innerHTML = "<button onclick='deleteElementByIndex(" + index + ")'>delete</button><input type='hidden' id='" + index + "'>";
        index++;

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

Prueba()



