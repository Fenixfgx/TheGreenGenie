$(document).ready(function() {
  $('#boton-listar').click(function() {
    $('#imagen-loader').show();
    ejecutarFuncion('listar');
  });

  $('#boton-enviar-correos').click(function() {
    $('#imagen-loader').show();
    ejecutarFuncion('enviarcorreos');
  });

  $('#boton-enturnador').click(function() {
    $('#imagen-loader').show();
    ejecutarFuncion('enviarCorreosAdjuntosEnturnador');
  });

  $('#boton-cliente').click(function() {
    $('#imagen-loader').show();
    ejecutarFuncion('enviarCorreosAdjuntosCliente');
  });

  $('#boton-agencias').click(function() {
    $('#imagen-loader').show();
    ejecutarFuncion('enviarCorreosAdjuntosAgencias');
  });

  function ejecutarFuncion(funcion) {
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbySPBlSHjcjjos-3bwwWj2dDa9EgOGMPH4Ur3BzY9bVGOHDRu6-uPmbkVg-YzdXOMAi/exec', // Reemplaza 'URL_DE_TU_APP_SCRIPT' con la URL de ejecución de tu Google Apps Script
      type: 'GET',
    data: { func: funcion },
    success: function(response) {
      alert('La función ' + funcion + ' se ejecutó correctamente');
      $('#imagen-loader').hide();
      obtenerDatos(); // Actualizar la tabla automáticamente
        $('#boton-enviar-correos').show();
        $('#boton-enturnador').show();
        $('#boton-cliente').show();
        $('#boton-agencias').show();
    },
    error: function(xhr, status, error) {
      alert('Hubo un error al ejecutar la función ' + funcion + ': ' + error);
      $('#imagen-loader').hide();
      }
    });
  }
});


// Carga la librería de Google Sheets
gapi.load('client', init);

function init() {
  gapi.client.init({
    apiKey: 'AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8', // Reemplaza 'TU_API_KEY' con tu propia clave API
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function() {
    // Llama a la función que obtiene los datos de la hoja de cálculo
    obtenerDatos();
  });
}

function obtenerDatos() {
  gapi.client.sheets.spreadsheets.values.batchGet({
    spreadsheetId: '1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w', // Reemplaza 'ID_DE_TU_HOJA_DE_CÁLCULO' con el ID de tu hoja de cálculo
    ranges: ['mailFGX!A2:A', 'mailFGXClient!B2:B', 'mailFGXClient!O2:O', 'mailFGXAgenciasin!P2:P', 'mailFGXAgenciasin!Q2:Q'] // Ajusta los rangos para las cinco columnas
  }).then(function(response) {
    var datos = response.result.valueRanges.map(function(valueRange) {
      return valueRange.values.map(function(row) {
        return row[0];
      });
    });
    mostrarDatosEnTabla(datos);
  });
}

function mostrarDatosEnTabla(datos) {
  var tablaBody = document.querySelector('#datos tbody');
  var maxFilas = Math.max.apply(null, datos.map(function(columna) { return columna.length; }));
  tablaBody.innerHTML = ''; // Limpiar la tabla antes de actualizarla
  for (var i = 0; i < maxFilas; i++) {
    var filaHTML = '<tr>';
    datos.forEach(function(columna) {
      filaHTML += '<td>' + (columna[i] ? columna[i] : '') + '</td>';
    });
    filaHTML += '</tr>';
    tablaBody.innerHTML += filaHTML;
  }
}
