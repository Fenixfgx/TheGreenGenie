function imprimirContenido() {
  const cardContainers = document.querySelectorAll('.cardas');
  let contenido = '';

  // Iniciar desde la segunda tarjeta
  for (let index = 1; index < cardContainers.length; index++) {
    contenido += cardContainers[index].outerHTML;

    // Agregar un salto de página después de cada tarjeta, excepto la última
    if (index < cardContainers.length - 1) {
      contenido += '<div style="page-break-after: always;"></div>';
    }
  }

  const ventanaImpresion = window.open('', '_blank');
  ventanaImpresion.document.write('<html><head><title>Imprimir</title></head><body>' + contenido + '</body></html>');
  ventanaImpresion.print();
  ventanaImpresion.close();
}