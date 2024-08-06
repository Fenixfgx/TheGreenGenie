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

document.getElementById('search-button').addEventListener('click', function() {
    const client = document.getElementById('client-selector').value;
    const date = document.getElementById('date-selector').value;
    fetchData(client, date);
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

document.getElementById('filtroCliente').addEventListener('input', function() {
        var filtro = this.value.toLowerCase();
        var select = document.getElementById('clientelzzz');
        var opciones = select.options;

        for (var i = 1; i < opciones.length; i++) { // Empezar en 1 para omitir "Seleccione un Cliente"
            var texto = opciones[i].textContent.toLowerCase();
            if (texto.includes(filtro)) {
                opciones[i].style.display = '';
            } else {
                opciones[i].style.display = 'none';
            }
        }
    });
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
    document.getElementById('vendedorh').value = parametros['vendedorh'] || '';
    document.getElementById('fechagen').value = parametros['fechagen'] || '';
    document.getElementById('fechades').value = parametros['fechades'] || '';
    document.getElementById('clientelzzz').value = parametros['clientelzzz'] || '';
  }

  // Llamar a la función para prellenar los inputs al cargar la página
  window.addEventListener('DOMContentLoaded', function() {
    prellenarInputs();
  });
