window.onload = callService;

var datos;
var urlApp = "https://maincode89.github.io/Tasty_Bites_API/menu.json";

function callService () {
    $.ajax({
        url: urlApp,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onSuccess (data) {
    datos = data;
    procesarDatos();
}

function onError (jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL " + urlApp);
}

function procesarDatos() {
    let menuContainer = document.getElementById("menu-container-id");
    let html = "";
    datos.productos.forEach(producto => {
        html += "<div class='col-lg-6 menu-item filter-specialty'>";
        html += "<div class='menu-content'>";
        html += "<a href='#'>" + producto.nombre + "</a><span>$" + producto.precio + "</span>";
        html += "</div>";
        html += "<div class='menu-ingredients'>" + producto.ingredientes + "</div>";
        html += "</div>";
    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
}