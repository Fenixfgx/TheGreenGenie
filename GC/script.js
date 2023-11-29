function imprimirComoPDF() {
  // Obtén el contenido de la clase "cardas"
  var contenido = document.querySelector('.cardas').innerHTML;

  // Configuración de opciones para la creación del PDF
  var opciones = {
    margin: 10,
    filename: 'tarjeta.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };


  // Crear el PDF
  html2pdf().from(contenido).set(opciones).outputPdf();
}