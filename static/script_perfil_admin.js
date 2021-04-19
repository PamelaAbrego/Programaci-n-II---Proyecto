window.onload = cargar;

function cargar() {
    datos();
    actDatos();
}
function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}

function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
}

function datos() {
    var perfilActual = readArrayFromSessionStorage("perfilActual");
    document.getElementById("user_admin").innerHTML = perfilActual.user;
    document.getElementById("email_admin").innerHTML = perfilActual.email;
}

function actDatos() {
    var array = readArrayFromLocalStorage("wUserArray")
    var myTable = document.getElementById("tabla");

    if (localStorage.getItem("wUserArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("wUserArray"));
    }

    for (var i = 0; i < array.length; i++) {
        var row = myTable.insertRow(1);

        row.insertCell(0).innerHTML = array[i].user;
        row.insertCell(1).innerHTML = array[i].password;
        row.insertCell(2).innerHTML = array[i].email;
        row.insertCell(3).innerHTML = array[i].role;
        row.insertCell(4).innerHTML = "<button onclick='modificarUsuario(" + i + ")'>Modificar</button><input type='hidden' id='" + i + "'>";
        row.insertCell(5).innerHTML = "<button onclick='eliminarUsuario(" + i + ")'>Eliminar</button><input type='hidden' id='" + i + "'>";
    }
}

function eliminarUsuario(i) {
    deleteElementFromLocalStorage(i)
    deleteElementFromTable(i)

}

function deleteElementFromLocalStorage(i) {
    var addResultArray = JSON.parse(localStorage.getItem("wUserArray"))
    addResultArray.splice(i, 1)
    localStorage.setItem("wUserArray", JSON.stringify(addResultArray))
}

function deleteElementFromTable(i) {
    var table = document.getElementById("tabla");
    var j = table.getElementsByTagName('tr').length - 1 - i;
    table.deleteRow(j);
}

function modificarUsuario(pIndex) {
    var element = document.getElementById(pIndex)
    var parent = getElementParent(element, 2)
    console.log(parent.children)
    var children = parent.children
    children[1].innerHTML = "<input type='text' id='password" + pIndex + "' value='" + children[1].innerText + "'>"
    children[2].innerHTML = "<input type='text' id='email" + pIndex + "' value='" + children[2].innerText + "'>"
    children[3].innerHTML = "<input type='radio' id='Cliente' name='Cliente'><label for 'ClienteNat'> Cliente </label> <br><input type='radio' id='Administrador' name='Cliente'><label for 'ClienteEmp'> Administrador </label>"
    children[4].innerHTML = "<button onclick='modifyOffElementByIndex(" + pIndex + ",1)'>Guardar</button><button onclick='modifyOffElementByIndex(" + pIndex + ",0)'>Regresar</button><input type='hidden' id='" + pIndex + "'>"
}

function modifyOffElementByIndex(pIndex, pSave) {
    var addResultArray
    if (localStorage.getItem("wUserArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("wUserArray"));
    }

    var element = document.getElementById(pIndex)
    var parent = getElementParent(element, 2)
    var children = parent.children

    if (pSave === 0) {
        //modify off
        children[1].innerHTML = addResultArray[pIndex].password
        children[2].innerHTML = addResultArray[pIndex].email
        children[3].innerHTML = addResultArray[pIndex].role
        children[4].innerHTML = "<button onclick='modificarUsuario(" + pIndex + ")'>Modificar</button><input type='hidden' id='" + pIndex + "'>";
    } else {
        //save
        var input1 = document.getElementById("password" + pIndex).value
        var input2 = document.getElementById("email" + pIndex).value

        var radios = document.getElementsByName('Cliente');
        for (var n = 0, length = radios.length; n < length; n++) {
            if (radios[n].checked) {
                input3 = radios[n].id;
                break;
            }
        }
        addResultArray[pIndex].password = input1
        addResultArray[pIndex].email = input2
        addResultArray[pIndex].role = input3

        children[1].innerHTML = input1
        children[2].innerHTML = input2
        children[3].innerHTML = input3
        children[4].innerHTML = "<button onclick='modificarUsuario(" + pIndex + ")'>Modificar</button><input type='hidden' id='" + pIndex + "'>";

        localStorage.setItem("wUserArray", JSON.stringify(addResultArray))
    }
}

function verificarForm() {
    var reg_user = document.getElementById("user").value;
    var reg_password = document.getElementById("password").value;
    var reg_email = document.getElementById("email").value;
    var radios = document.getElementsByName('Cliente');
    var reg_role = "";
    for (var n = 0, length = radios.length; n < length; n++) {
        if (radios[n].checked) {
            reg_role = radios[n].id;
            break;
        }
    }
    var suma = 0;

    if (reg_user === "") {
        suma = suma + 1;
        document.getElementById("user_result").innerHTML = "Este campo es obligatorio."
    } else {
        document.getElementById("user_result").innerHTML = "";
    }
    if (reg_password === "") {
        suma = suma + 1;
        document.getElementById("password_result").innerHTML = "Este campo es obligatorio."
    } else {
        document.getElementById("password_result").innerHTML = "";
    }
    if (reg_email === "") {
        suma = suma + 1;
        document.getElementById("email_result").innerHTML = "Este campo es obligatorio."
    } else {
        document.getElementById("email_result").innerHTML = "";
    }
    if (reg_role === "") {
        suma = suma + 1;
        document.getElementById("role_result").innerHTML = "Este campo es obligatorio."
    } else {
        document.getElementById("role_result").innerHTML = "";
    }

    if (suma === 0) {
        agregarUsuario();
        alert("Usuario agregado con éxito.")
    }
}

function agregarUsuario() {
    var reg_user = document.getElementById("user").value;
    var reg_password = document.getElementById("password").value;
    var reg_email = document.getElementById("email").value;
    var radios = document.getElementsByName('Cliente');
    var reg_role = "";
    for (var n = 0, length = radios.length; n < length; n++) {
        if (radios[n].checked) {
            reg_role = radios[n].id;
            break;
        }
    }
    var userArray = [];

    if (localStorage.getItem("wUserArray") !== null) {
        userArray = JSON.parse(localStorage.getItem("wUserArray"));
    }

    var current_reg = {
        user: reg_user,
        password: reg_password,
        email: reg_email,
        role: reg_role
    };

    userArray.push(current_reg);
    localStorage.setItem("wUserArray", JSON.stringify(userArray));
}

function getElementParent(pElement, pGen) {
    var parent = pElement
    for (var i = 0; i < pGen; i++) {
        parent = parent.parentNode
    }
    return parent
}