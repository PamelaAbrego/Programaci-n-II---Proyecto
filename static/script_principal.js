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