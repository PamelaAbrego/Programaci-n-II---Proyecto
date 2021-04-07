function cargarUsuarios() {

    var userArray = [{
        user: "Pamela",
        password: "PA",
        email: "pamela@comsedi.com",
        role: "Administrador"
    }, {
        user: "Francisco",
        password: "FA",
        email: "francisco@comsedi.com",
        role: "Administrador"
    }, {
        user: "Javier",
        password: "JA",
        email: "javier@comsedi.com",
        role: "Administrador"
    }, {
        user: "Hector",
        password: "HE",
        email: "hector@comsedi.com",
        role: "Cliente"
    }, {
        user: "José",
        password: "JO",
        email: "jose@comsedi.com",
        role: "Cliente"
    }, {
        user: "Valeria",
        password: "VA",
        email: "valeria@comsedi.com",
        role: "Cliente"
    }, {
        user: "Luis",
        password: "LU",
        email: "luis@comsedi.com",
        role: "Cliente"
    }];

    localStorage.setItem("wUserArray", JSON.stringify(userArray))
}

cargarUsuarios();