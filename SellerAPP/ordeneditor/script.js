document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener y mostrar la lista de clientes
    window.fetchClientes = function() {
        var vendedor = document.getElementById('vendedorh').value;

        fetch('https://sheets.googleapis.com/v4/spreadsheets/1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w/values/Clientes!B:E?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8')
            .then(response => response.json())
            .then(data => {
                var select = document.getElementById('clientelzzz');
                select.innerHTML = '<option value="">Seleccione un Cliente</option>'; // Limpiar la lista desplegable

                if (data.values && data.values.length > 0) {
                    var clientes = data.values.filter(row => row[3] && row[3].toLowerCase().includes(vendedor.toLowerCase())).map(row => row[0]);

                    // Agregar solo los clientes correspondientes al vendedor al select
                    clientes.forEach(cliente => {
                        var option = document.createElement('option');
                        option.value = cliente;
                        option.textContent = cliente;
                        select.appendChild(option);
                    });
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de clientes:', error);
            });
    };
});


 // Function to set the value of fechagen to other inputs
  function setFechagenValue() {
    // Get the value from the fechagen input
    const fechagenValue = document.getElementById('fechagen').value;

    // Loop through inputs fechag1 to fechag11 and set their value
    for (let i = 1; i <= 11; i++) {
      const input = document.getElementById(`fechag${i}`);
      if (input) {
        input.value = fechagenValue;
      }
    }
  }

  // Add event listener to fechagen input
  document.getElementById('fechagen').addEventListener('input', setFechagenValue);

// Function to set the value of fechagen to other inputs
  function setFechadesValue() {
    // Get the value from the fechagen input
    const fechadesValue = document.getElementById('fechades').value;

    // Loop through inputs fechag1 to fechag11 and set their value
    for (let i = 1; i <= 11; i++) {
      const input = document.getElementById(`fechad${i}`);
      if (input) {
        input.value = fechadesValue;
      }
    }
  }

  // Add event listener to fechagen input
  document.getElementById('fechades').addEventListener('input', setFechadesValue);

//////

// Function to set the value of fechagen to other inputs
  function setsellerValue() {
    // Get the value from the fechagen input
    const sellerValue = document.getElementById('vendedorh').value;

    // Loop through inputs fechag1 to fechag11 and set their value
    for (let i = 1; i <= 11; i++) {
      const input = document.getElementById(`seller${i}`);
      if (input) {
        input.value = sellerValue;
      }
    }
  }

  // Add event listener to fechagen input
  document.getElementById('vendedorh').addEventListener('input', setsellerValue);


const API_KEY = 'AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8';
const SHEET_ID = '1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w';
const SHEET_NAME = 'Sellers';



document.addEventListener('DOMContentLoaded', function() {
    // Añadir un retraso de 1 segundo antes de disparar el evento 'click'
    setTimeout(function() {
        document.getElementById('search-button').click();
    }, 2000); // 1000 milisegundos = 1 segundo
});

document.addEventListener('DOMContentLoaded', function() {
    // Añadir un retraso de 1 segundo antes de disparar el evento 'click'
    setTimeout(function() {
        document.getElementById('search-button').click();
    }, 1800); // 1000 milisegundos = 1 segundo
});

document.getElementById('search-button').addEventListener('click', function() {
    const client = document.getElementById('client-selector').value;
    const date = document.getElementById('date-selector').value;
    fetchData(client, date); // Llamar a la función fetchData con los valores seleccionados
});


async function fetchData(client, date) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!F:U?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data.values, client, date);
}

function displayResults(rows, client, date) {
    const filteredRows = rows.filter(row => row[0] === client && row[2] === date);
    const resultsTable = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = '';

    filteredRows.forEach(row => {
        const newRow = resultsTable.insertRow();
        for (let i = 4; i <= 15; i++) {
            if (i === 7) continue;  // Skip column "M"
            const cell = newRow.insertCell();
            cell.textContent = row[i] || '';
        }
    });

    const ids = [
        ['productlistzzz', 'cantidad', 'empaquelistzz', 'talloscajazzz', 'totaltalloszzz', 'tallosramozzz', 'ramospiezazzz', 'totalramoszzz', 'preciozzz', 'tpreciozzz', 'gradolistzzz'],
        ['productlistzzz3', 'cantidad3', 'empaquelistzz3', 'talloscajazzz3', 'totaltalloszzz3', 'tallosramozzz3', 'ramospiezazzz3', 'totalramoszzz3', 'preciozzz3', 'tpreciozzz3',  'gradolistzzz3'],
        ['productlistzzz4', 'cantidad4', 'empaquelistzz4', 'talloscajazzz4', 'totaltalloszzz4', 'tallosramozzz4', 'ramospiezazzz4', 'totalramoszzz4', 'preciozzz4', 'tpreciozzz4',  'gradolistzzz4'],
        ['productlistzzz5', 'cantidad5', 'empaquelistzz5', 'talloscajazzz5', 'totaltalloszzz5', 'tallosramozzz5', 'ramospiezazzz5', 'totalramoszzz5', 'preciozzz5', 'tpreciozzz5',  'gradolistzzz5'],
        ['productlistzzz6', 'cantidad6', 'empaquelistzz6', 'talloscajazzz6', 'totaltalloszzz6', 'tallosramozzz6', 'ramospiezazzz6', 'totalramoszzz6', 'preciozzz6', 'tpreciozzz6',  'gradolistzzz6'],
        ['productlistzzz7', 'cantidad7', 'empaquelistzz7', 'talloscajazzz7', 'totaltalloszzz7', 'tallosramozzz7', 'ramospiezazzz7', 'totalramoszzz7', 'preciozzz7', 'tpreciozzz7',  'gradolistzzz7'],
        ['productlistzzz8', 'cantidad8', 'empaquelistzz8', 'talloscajazzz8', 'totaltalloszzz8', 'tallosramozzz8', 'ramospiezazzz8', 'totalramoszzz8', 'preciozzz8', 'tpreciozzz8',  'gradolistzzz8'],
        ['productlistzzz9', 'cantidad9', 'empaquelistzz9', 'talloscajazzz9', 'totaltalloszzz9', 'tallosramozzz9', 'ramospiezazzz9', 'totalramoszzz9', 'preciozzz9',  'tpreciozzz9', 'gradolistzzz9'],
        ['productlistzzz10', 'cantidad10', 'empaquelistzz10', 'talloscajazzz10', 'totaltalloszzz10', 'tallosramozzz10', 'ramospiezazzz10', 'totalramoszzz10', 'preciozzz10', 'tpreciozzz10',  'gradolistzzz10'],
        ['productlistzzz11', 'cantidad11', 'empaquelistzz11', 'talloscajazzz11', 'totaltalloszzz11', 'tallosramozzz11', 'ramospiezazzz11', 'totalramoszzz11', 'preciozzz11', 'tpreciozzz11',  'gradolistzzz11']
    ];

    ids.forEach((rowIds, rowIndex) => {
        const values = filteredRows[rowIndex] ? filteredRows[rowIndex].filter((_, idx) => idx !== 7).slice(4, 15) : Array(11).fill('');
        updateInputs(rowIds, values);
    });
}

function updateInputs(inputIds, values) {
    inputIds.forEach((inputId, index) => {
        document.getElementById(inputId).value = values[index] || '';
    });
}


/////

        function copyToClipboard(...ids) {
            let textToCopy = ids.map(id => document.getElementById(id).value).join('|');
            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log('Texto copiado:', textToCopy);
            }).catch(err => {
                console.error('Error al copiar:', err);
            });
        }

        function pasteFromClipboard(...ids) {
            navigator.clipboard.readText().then(text => {
                let values = text.split('|');
                ids.forEach((id, index) => {
                    if (values[index] !== undefined) {
                        document.getElementById(id).value = values[index];
                    }
                });
            }).catch(err => {
                console.error('Error al pegar:', err);
            });
        }


 // Función para obtener parámetros de la URL
function obtenerParametrosURL() {
  var parametros = {};
  var queryString = window.location.search.substring(1);
  var pares = queryString.split('&');
  for (var i = 0; i < pares.length; i++) {
    var par = pares[i].split('=');
    parametros[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
  }
  return parametros;
}

// Función para prellenar los inputs con los parámetros de la URL
function prellenarInputs() {
  var parametros = obtenerParametrosURL();

  // Poner valores y disparar eventos de cambio para que el formulario los registre
  var clientSelector = document.getElementById('client-selector');
  var dateSelector = document.getElementById('date-selector');
  var fechades = document.getElementById('fechades');
  var clientelzzz = document.getElementById('clientelzzz');
  var vendedorh = document.getElementById('vendedorh');

  if (clientSelector) {
    clientSelector.value = parametros['client-selector'] || '';
    
  }

  if (dateSelector) {
    dateSelector.value = parametros['date-selector'] || '';
    dateSelector.dispatchEvent(new Event('input'));
  }

  if (fechades) {
    fechades.value = parametros['fechades'] || '';
    fechades.dispatchEvent(new Event('input'));
  }

 if (vendedorh) {
    vendedorh.value = parametros['vendedorh'] || '';
    vendedorh.dispatchEvent(new Event('input'));
  }

  if (clientelzzz) {
    clientelzzz.value = parametros['clientelzzz'] || '';
    clientelzzz.dispatchEvent(new Event('input'));
  }
}

// Llamar la función para prellenar inputs cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', prellenarInputs);

// Obtener todos los elementos select en la página
const allSelects = document.querySelectorAll('select');

// Agregar la lógica a cada select
allSelects.forEach(selectElement => {
    // Crear un campo de input para ingresar valores personalizados
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.style.display = 'none'; // Ocultamos el input inicialmente
    inputElement.className = 'custom-input'; // Asignamos una clase para el estilo
    selectElement.parentNode.insertBefore(inputElement, selectElement.nextSibling); // Insertamos el input después del select

    // Detectar cuando cambia el select
    selectElement.addEventListener('change', function() {
        const selectedValue = selectElement.value;

        // Si el valor no está en las opciones, mostrar el input
        const optionExists = Array.from(selectElement.options).some(option => option.value === selectedValue);

        if (!optionExists && selectedValue !== "") {
            selectElement.style.display = 'none'; // Ocultamos el select
            inputElement.style.display = 'inline-block'; // Mostramos el input
            inputElement.value = selectedValue; // Llenamos el input con el valor seleccionado
        }
    });

    // Cuando se edite el input, actualizar el valor del select
    inputElement.addEventListener('input', function() {
        selectElement.value = inputElement.value; // Actualizar el select con el valor del input
    });

    // Cuando el input pierda el foco, volver a mostrar el select
    inputElement.addEventListener('blur', function() {
        if (inputElement.value.trim() === '') {
            inputElement.style.display = 'none'; // Ocultamos el input
            selectElement.style.display = 'inline-block'; // Volvemos a mostrar el select
        }
    });
});

function convertAllSelectsToInputs() {
            // Obtener todos los elementos <select> en la página
            const allSelects = document.querySelectorAll('select');

            // Recorrer cada <select> y reemplazarlo por un <input>
            allSelects.forEach(select => {
                // Obtener el valor seleccionado actualmente (o vacío si no hay seleccionado)
                const selectedValue = select.value || '';

                // Crear un nuevo elemento <input> con el valor seleccionado
                const input = document.createElement('input');
                input.type = 'text';
                input.value = selectedValue; // Asignar el valor seleccionado o vacío
                input.name = select.name || select.id;  // Mantener el nombre o id del select para el input
                input.id = select.id; // Asignar el mismo id del select al input

                // Insertar el nuevo <input> antes del <select>
                select.parentNode.insertBefore(input, select);
                // Eliminar el <select>
                select.parentNode.removeChild(select);
            });
        }


