let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/imagen-yotsuba.jpg") {
    miImage.setAttribute("src", "images/firefox2.png");
  } else {
    miImage.setAttribute("src", "images/imagen-yotsuba.jpg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Yotsuba es genial, " + miNombre;
}
}
    
if (!localStorage.getItem("Nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Yotsuba es genial, " + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
};
