function imprimir() {
  // Obtener el contenido de la clase 'cardas'
  var contenido = document.querySelector('.cardas').innerHTML;

  // Crear un nuevo elemento de tipo 'iframe'
  var ventanaImpresion = window.open('', '_blank');
  ventanaImpresion.document.write('<html><head><title>Imprimir</title></head><body>' + contenido + '</body></html>');

  // Cerrar el documento después de la impresión
  ventanaImpresion.document.close();
  ventanaImpresion.print();
}