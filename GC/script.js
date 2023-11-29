function imprimirContenido() {
  // Oculta todo excepto el contenido que deseas imprimir
  var elementosAImprimir = document.querySelector('.cardas').innerHTML;
  var elementosNoImprimir = document.body.querySelectorAll(':not(.cardas)');
  elementosNoImprimir.forEach(function (elemento) {
    elemento.style.display = 'none';
  });

  // Imprime el contenido visible
  window.print();

  // Restaura la visibilidad de los elementos ocultados
  elementosNoImprimir.forEach(function (elemento) {
    elemento.style.display = '';
  });
}