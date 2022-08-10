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
        console.log(producto.nombre)
        html += "<div class='col'>";
        html += "<div class='card card-cover h-100 overflow-hidden text-bg-dark rounded-10 shadow-lg' style=\"background-image: url('" + producto.imagen +"');\">";
        html += "<div class='d-flex flex-column h-100 p-3 pb-1 text-white text-shadow-1'>";
        html += "<h2 class='display-6 lh-1 fw-bold'>" + producto.nombre + "</h2>";
        html += "<p>" + producto.ingredientes + "</p>";
        html += "<ul class='d-flex list-unstyled mt-auto'>";
        html += "<li class='me-auto'>";
        html += "<img src='" + producto.imagen + "' alt='Platillo' width='32' height='32' class='rounded-circle border border-white' />";
        html += "</li>";
        html += "<li class='d-flex align-items-center me-3'>";
        html += "<svg class='bi me-2' width='1em' height='1em'><use xlink:href='#geo-fill' /></svg>";
        html += "<small>" + producto.clasificacion + "</small>";
        html += "</li>";
        html += "<li class='d-flex align-items-center'>";
        html += "<svg class='bi me-2' width='1em' height='1em'><use xlink:href='#calendar3' /></svg>";
        html += "<small>" + producto.precio + "</small>";
        html += "</li></ul></div></div></div>";
    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
    console.log(html);
}