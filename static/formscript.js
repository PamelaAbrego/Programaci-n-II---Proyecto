function Prueba() {
    var d = new Date();
    var year = d.getFullYear();
    var day = d.getDate();
    var month = d.getMonth() + 1;

    if (month >= 10) {
        var fecha = year.toString() + "-" + month + "-" + day.toString();
        document.getElementById("datemin").setAttribute("min", fecha);
        document.getElementById("datef").setAttribute("min", fecha);
    }

    else {
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

function comprobarDatos() {
    var cot = checkInputCheckBox();
    var cli = checkRadio();
    var ubi = checkUbicacion();
    var nom = checkNombre();
    var cor = checkCorreo();
    var num = checkNumero();
    var suma = cot + cli + ubi + nom + cor + num;
    if (suma == 0) {
        alert("Tu formulario de cotización se ha enviado correctamente.");
        alert("COMSEDI se contactará contigo en las próximas 48 horas.");
        leerDatos();
    }
    //else {
    //alert("Falta algún dato");

    //}
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

    if (month1 >= 10) {
        var fecha3 = year1.toString() + "-" + month1 + "-" + day1.toString() + "//" + hour1.toString() + ":" + min.toString() + " " + med;
    }

    else {
        var fecha3 = year1.toString() + "-0" + month1 + "-" + day1.toString() + "//" + hour1.toString() + ":" + min.toString() + " " + med;
    }

    AddResult(fecha3, tipo, cliente, nombre, correo, numero, fecha1, fecha2, ubicacion, descripcion);
}


function AddResult(date3, type, client, name, mail, number, date1, date2, location, description) {
    var AddResultArray = [];

    if (localStorage.getItem("lAddResultArray") !== null) {
        AddResultArray = JSON.parse(localStorage.getItem("lAddResultArray"));
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
    }

    AddResultArray.push(current_add_result);
    localStorage.setItem("lAddResultArray", JSON.stringify(AddResultArray));
}

function loadAddDataFromAllUsers() {
    var addResultArray;
    if (localStorage.getItem("lAddResultArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("lAddResultArray"));
    }

    var userTableClient = document.getElementById("userTableClient");
    var row;
    var index = 0;

    for (var addResult of addResultArray) {
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
    deleteElementFromLocalStorage(pIndex);
    deleteElementFromTable(pIndex);
    
    
}



function deleteElementFromLocalStorage(pIndex) {
    var addResultArray = JSON.parse(localStorage.getItem("lAddResultArray"));
    addResultArray.splice(pIndex, 1);
    localStorage.setItem("lAddResultArray", JSON.stringify(addResultArray));
}

function deleteElementFromTable(pIndex) {
    var element = document.getElementById(pIndex);
    var parent = getElementParent(element, 3);
    var child = getElementParent(element, 2);
    parent.removeChild(child);
}

Prueba()



