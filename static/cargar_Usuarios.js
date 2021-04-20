function cargarUsuarios(user, password, email, role) {

    var addResultArray = [];

    if (localStorage.getItem("wUserArray") !== null) {
        addResultArray = JSON.parse(localStorage.getItem("wUserArray"));
    }

    userArray = {
        user: user,
        password: password,
        email: email,
        role: role
    }

    addResultArray.push(userArray)
    localStorage.setItem("wUserArray", JSON.stringify(addResultArray))
}

cargarTodosUsuarios();

function cargarTodosUsuarios() {

    var usuarios = readArrayFromLocalStorage("wUserArray");
    var pam = 0
    var fra = 0
    var jav = 0
    var hec = 0
    var jos = 0
    var lui = 0
    var num = 0
    var val = 0

    if (usuarios != null) {

        for (var i = 0; i <= usuarios.length - 1; i++) {
            if (usuarios[i].user == "Pamela" && usuarios[i].email == "pamela@comsedi.com") {
                pam = pam + 1
            }
        }
        for (var i = 1; i <= usuarios.length - 1; i++) {
            if (usuarios[i].user == "Francisco" && usuarios[i].email == "francisco@comsedi.com") {
                fra = fra + 1
            }
        }
        for (var i = 1; i <= usuarios.length - 1; i++) {
            if (usuarios[i].user == "Javier" && usuarios[i].email == "javier@comsedi.com") {
                jav = jav + 1
            }
        }
        for (var i = 1; i <= usuarios.length - 1; i++) {
            if (usuarios[i].user == "Héctor" && usuarios[i].email == "hector@comsedi.com") {
                hec = hec + 1
            }
        }
        for (var i = 1; i <= usuarios.length - 1; i++) {
            if (usuarios[i].user == "José" && usuarios[i].email == "jose@comsedi.com") {
                jos = jos + 1
            }
        }
        for (var i = 1; i <= usuarios.length - 1; i++) {
            if (usuarios[i].user == "Luis" && usuarios[i].email == "luis@comsedi.com") {
                lui = lui + 1
            }
        }
        for (var i = 1; i <= usuarios.length - 1; i++) {
            if (usuarios[i].user == "Valeria" && usuarios[i].email == "valeria@comsedi.com") {
                val = val + 1
            }
        }
    }

    if (pam === 0) {
        cargarUsuarios("Pamela", "PA", "pamela@comsedi.com", "Administrador")
    }

    if (fra === 0) {
        cargarUsuarios("Francisco", "FA", "francisco@comsedi.com", "Administrador")
    }

    if (jav === 0) {
        cargarUsuarios("Javier", "JA", "javier@comsedi.com", "Administrador")
    }

    if (hec === 0) {
        cargarUsuarios("Héctor", "HE", "hector@comsedi.com", "Cliente")
    }

    if (jos === 0) {
        cargarUsuarios("José", "JO", "jose@comsedi.com", "Cliente")
    }

    if (val === 0) {
        cargarUsuarios("Valeria", "VA", "valeria@comsedi.com", "Cliente")
    }

    if (lui === 0) {
        cargarUsuarios("Luis", "LU", "luis@comsedi.com", "Cliente")
    }

}

function login() {
    window.location.href = '/login';
}

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}