
const contenedorQR = document.getElementById("contenedorQR");
const formulario = document.getElementById("formulario");

const QR = new QRCode(contenedorQR);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();   //éste evento se usa para refrezcar la página
    QR.makeCode(formulario.link.value);
})