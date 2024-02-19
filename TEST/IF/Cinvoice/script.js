function incrementarNumero() {
  fetch('https://script.google.com/macros/s/AKfycbxOQVM7qbnMF0yc2dGd5Y63IVx2_o9tYIRtR7-1SCGgJGMWmc1vMGiT00wlaRf2NDAg/exec').
  then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).
  then(data => {
    console.log('Valor actualizado:', data);
    document.getElementById('numero').innerText = data;
  }).
  catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  imprimirContenido();
  fetchData();
}


function imprimirContenido() {
  const cardContainers = document.querySelectorAll('.cardas');
  let contenido = '';

  cardContainers.forEach((container, index) => {
    // Verificar si el contenedor está visible en la página actual
    const isVisible = window.getComputedStyle(container).getPropertyValue('display') !== 'none';

    if (isVisible) {
      contenido += container.outerHTML;

      // Agregar un salto de página después de cada tarjeta visible, excepto la última
      if (index < cardContainers.length - 1) {
        contenido += '<div style="page-break-after: always;"></div>';
      }
    }
  });

  const ventanaImpresion = window.open('', '_blank');
  ventanaImpresion.document.write('<html><head><title>Cinvoice</title></head><body>' + contenido + '</body></html>');
  ventanaImpresion.print();
  ventanaImpresion.close();
}

function buscarPorFechaYDestinatario() {
  const fechaInput = document.getElementById("fechaInput").value;

  const tarjetas = document.querySelectorAll(".cardas");
  tarjetas.forEach(tarjeta => {
    const fechaTarjeta = tarjeta.querySelector("#fecha").textContent.trim();

    if (fechaTarjeta === fechaInput) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}

function obtenerDestinatariosPorFecha() {
  const fechaInput = document.getElementById("fechaInput").value;

  const tarjetas = document.querySelectorAll(".cardas");
  const destinatarios = new Set();

  tarjetas.forEach(tarjeta => {
    const fechaTarjeta = tarjeta.querySelector("#fecha").textContent.trim();
    const destinatarioTarjeta = tarjeta.querySelector("#destinatario").textContent.trim();

    if (fechaTarjeta === fechaInput) {
      destinatarios.add(destinatarioTarjeta);
    }
  });

  return Array.from(destinatarios);
}

function actualizarListaDestinatarios() {
  const destinatarioInput = document.getElementById("destinatarioInput");
  const destinatariosPorFecha = obtenerDestinatariosPorFecha();

  // Limpiar la lista actual de destinatarios
  destinatarioInput.innerHTML = '';

  // Crear y agregar nuevas opciones a la lista de destinatarios
  destinatariosPorFecha.forEach(destinatario => {
    const option = document.createElement('option');
    option.value = destinatario;
    option.text = destinatario;
    destinatarioInput.appendChild(option);
  });
}


window.onload = function () {
  const tarjetas = document.querySelectorAll(".cardas");
  tarjetas.forEach(tarjeta => {
    tarjeta.style.display = "none";
  });
};

function actualizarFormatoFecha() {
  const fechaInput = document.getElementById('fechaIn').value;
  const fechaFormateada = formatearFecha(fechaInput);
  document.getElementById('fechaInput').value = fechaFormateada;
}

function formatearFecha(fecha) {
  const meses = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];


  const partesFecha = fecha.split('-');
  const año = partesFecha[0];
  const mes = meses[parseInt(partesFecha[1], 10) - 1];
  const dia = String(partesFecha[2]).padStart(2, '0');

  return `${dia} de ${mes} de ${año}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const $boton = document.querySelector("#btnCrearPdf");
  $boton.addEventListener("click", () => {
    const cardContainers = document.querySelectorAll('.cardas');
    let contenido = '';

    cardContainers.forEach((container, index) => {
      const isVisible = window.getComputedStyle(container).getPropertyValue('display') !== 'none';

      if (isVisible) {
        contenido += container.outerHTML;

        if (index < cardContainers.length - 1) {
          contenido += '<div style="page-break-after: always;"></div>';
        }
      }
    });

    if (contenido.trim() !== '') {
      html2pdf().
      set({
        margin: 0,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, letterRendering: true },
        jsPDF: { unit: "in", format: "a4", orientation: 'portrait' } }).

      from(contenido).
      save().
      catch(err => console.log(err));
    } else {
      console.log('No se encontraron elementos con la clase "cardas" para convertir a PDF.');
    }
  });
});