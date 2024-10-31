document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener y mostrar la lista de clientes
    window.fetchClientes = function() {
        var vendedor = document.getElementById('vendedorzzz').value;

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

////////////

function clearFields() {
    var fields = [
        'cantidadzzz', 'observacioneszzz','pozzz', 'productout', 'tcajaout','ttallosout', 'tallosramoout', 'rapiout','traout', 'tpout', 'pout','gradout', 'markout', 'atpaout', 'totalsteamout','tpreciooutz', 'totaltallosQB', 'totaltallosHB', 'totaltallosEB','totaltallosFLL', 'productlistzzz', 'talloscajazzz', 'tallosramozzz', 'ramospiezazzz', 'preciozzz', 'gradolistzzz', 'markzzz',
        'productlistzzz', 'talloscajazzz', 'tallosramozzz', 'ramospiezazzz', 'preciozzz', 'gradolistzzz', 'markzzz', 'totaltalloszzz', 'totalramoszzz', 'tpreciozzz',
        'productlistzzz1', 'talloscajazzz1', 'tallosramozzz1', 'ramospiezazzz1', 'preciozzz1', 'gradolistzzz1', 'markzzz1', 'totaltalloszzz1', 'totalramoszzz1', 'tpreciozzz1',
        'productlistzzz2', 'talloscajazzz2', 'tallosramozzz2', 'ramospiezazzz2', 'preciozzz2', 'gradolistzzz2', 'markzzz2', 'totaltalloszzz2', 'totalramoszzz2', 'tpreciozzz2',
        'productlistzzz3', 'talloscajazzz3', 'tallosramozzz3', 'ramospiezazzz3', 'preciozzz3', 'gradolistzzz3', 'markzzz3', 'totaltalloszzz3', 'totalramoszzz3', 'tpreciozzz3',
        'productlistzzz4', 'talloscajazzz4', 'tallosramozzz4', 'ramospiezazzz4', 'preciozzz4', 'gradolistzzz4', 'markzzz4', 'totaltalloszzz4', 'totalramoszzz4', 'tpreciozzz4',
        'productlistzzz5', 'talloscajazzz5', 'tallosramozzz5', 'ramospiezazzz5', 'preciozzz5', 'gradolistzzz5', 'markzzz5', 'totaltalloszzz5', 'totalramoszzz5', 'tpreciozzz5',
        'productlistzzz6', 'talloscajazzz6', 'tallosramozzz6', 'ramospiezazzz6', 'preciozzz6', 'gradolistzzz6', 'markzzz6', 'totaltalloszzz6', 'totalramoszzz6', 'tpreciozzz6',
        'productlistzzz7', 'talloscajazzz7', 'tallosramozzz7', 'ramospiezazzz7', 'preciozzz7', 'gradolistzzz7', 'markzzz7', 'totaltalloszzz7', 'totalramoszzz7', 'tpreciozzz7',
        'productlistzzz8', 'talloscajazzz8', 'tallosramozzz8', 'ramospiezazzz8', 'preciozzz8', 'gradolistzzz8', 'markzzz8', 'totaltalloszzz8', 'totalramoszzz8', 'tpreciozzz8',
        'productlistzzz9', 'talloscajazzz9', 'tallosramozzz9', 'ramospiezazzz9', 'preciozzz9', 'gradolistzzz9', 'markzzz9', 'totaltalloszzz9', 'totalramoszzz9', 'tpreciozzz9',
        'productlistzzz10', 'talloscajazzz10', 'tallosramozzz10', 'ramospiezazzz10', 'preciozzz10', 'gradolistzzz10', 'markzzz10', 'totaltalloszzz10', 'totalramoszzz10', 'tpreciozzz10',
        'productlistzzz11', 'talloscajazzz11', 'tallosramozzz11', 'ramospiezazzz11', 'preciozzz11', 'gradolistzzz11', 'markzzz11', 'totaltalloszzz11', 'totalramoszzz11', 'tpreciozzz11',
        'productlistzzz12', 'talloscajazzz12', 'tallosramozzz12', 'ramospiezazzz12', 'preciozzz12', 'gradolistzzz12', 'markzzz12', 'totaltalloszzz12', 'totalramoszzz12', 'tpreciozzz12',
        'productlistzzz13', 'talloscajazzz13', 'tallosramozzz13', 'ramospiezazzz13', 'preciozzz13', 'gradolistzzz13', 'markzzz13', 'totaltalloszzz13', 'totalramoszzz13', 'tpreciozzz13',
        'productlistzzz14', 'talloscajazzz14', 'tallosramozzz14', 'ramospiezazzz14', 'preciozzz14', 'gradolistzzz14', 'markzzz14', 'totaltalloszzz14', 'totalramoszzz14', 'tpreciozzz14',
        'productlistzzz15', 'talloscajazzz15', 'tallosramozzz15', 'ramospiezazzz15', 'preciozzz15', 'gradolistzzz15', 'markzzz15', 'totaltalloszzz15', 'totalramoszzz15', 'tpreciozzz15',
        'productlistzzz16', 'talloscajazzz16', 'tallosramozzz16', 'ramospiezazzz16', 'preciozzz16', 'gradolistzzz16', 'markzzz16', 'totaltalloszzz16', 'totalramoszzz16', 'tpreciozzz16',
        'productlistzzz17', 'talloscajazzz17', 'tallosramozzz17', 'ramospiezazzz17', 'preciozzz17', 'gradolistzzz17', 'markzzz17', 'totaltalloszzz17', 'totalramoszzz17', 'tpreciozzz17',
        'productlistzzz18', 'talloscajazzz18', 'tallosramozzz18', 'ramospiezazzz18', 'preciozzz18', 'gradolistzzz18', 'markzzz18', 'totaltalloszzz18', 'totalramoszzz18', 'tpreciozzz18',
        'productlistzzz19', 'talloscajazzz19', 'tallosramozzz19', 'ramospiezazzz19', 'preciozzz19', 'gradolistzzz19', 'markzzz19', 'totaltalloszzz19', 'totalramoszzz19', 'tpreciozzz19',
        'productlistzzz20', 'talloscajazzz20', 'tallosramozzz20', 'ramospiezazzz20', 'preciozzz20', 'gradolistzzz20', 'markzzz20', 'totaltalloszzz20', 'totalramoszzz20', 'tpreciozzz20',
        'productlistzzz21', 'talloscajazzz21', 'tallosramozzz21', 'ramospiezazzz21', 'preciozzz21', 'gradolistzzz21', 'markzzz21', 'totaltalloszzz21', 'totalramoszzz21', 'tpreciozzz21'
    ];

    fields.forEach(function(field) {
        var element = document.getElementById(field);
        if (element) {
            element.value = '';
        }
    });

    // Ocultar los divs con id "fx1" a "fx12"
    for (var i = 1; i <= 12; i++) {
        var fxDiv = document.getElementById('fila' + i);
        if (fxDiv) {
            fxDiv.style.display = 'none';
        }
    }
  
  // Ocultar los divs con id "fx1" a "fx12"
    for (var i = 1; i <= 12; i++) {
        var fxDiv = document.getElementById('fx' + i);
        if (fxDiv) {
            fxDiv.style.display = 'none';
        }
    }
}

function ejecutarCalculos() {
calcularTotalRamos();
actualizarTallosRamo();
actualizarPrecio();
tcajaOut();
ttallosOut();
tramosOut();
rppOut();
trOut();
tpOut();
pOut();
grOut();
markOut();
calcularTotalRamos();
tcajaOut();
actualizarProductOut();

}

// Reemplaza con el ID de tu hoja de cálculo de Google
const SHEET_ID = '1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w'; 
const API_KEY = 'AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8'; // Reemplaza con tu clave API

// Rango de datos a consultar
const RANGE = 'Sellers!A1:AN'; // Definimos el rango que incluye todas las columnas relevantes

// Obtener referencia a los campos e inputs
const fechaInput = document.getElementById('fecha');
const fechaprzzzInput = document.getElementById('fechaprzzz');
const fechadeszzzInput = document.getElementById('fechadeszzz');
const clientelzzzSelect = document.getElementById('clientelzzz');
const tipordenzzzSelect = document.getElementById('tipordenzzz');
const empaquelistzzzSelect = document.getElementById('empaquelistzzz');
const cantidadzzzInput = document.getElementById('cantidadzzz');
const observacioneszzzInput = document.getElementById('observacioneszzz');
const pozzzInput = document.getElementById('pozzz');

// Copiar valor de fecha al campo fechaprzzz cuando se cambie
fechaInput.addEventListener('change', function() {
    fechaprzzzInput.value = fechaInput.value;
});

document.getElementById('searchFormhtml').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío normal del formulario

    clearFields();
    showFields();
  
    const cliente = document.getElementById('cliente').value;
    const fecha = document.getElementById('fecha').value;
    const linea = document.getElementById('linea').value; // Obtener valor de la línea

    // URL para la API de Google Sheets
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    // Hacemos la llamada a la API para obtener los datos
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values; // Obtenemos las filas de la hoja

            const resultBody = document.getElementById('resultBody');
            resultBody.innerHTML = ''; // Limpiar resultados previos

            // Buscar filas donde el cliente (columna F), la fecha (columna H), y la línea (columna A) coincidan
            // y la columna J contenga el símbolo "<"
            const filteredRows = rows.filter(row => {
                const lineaColumna = row[0];   // Columna A
                const clienteColumna = row[5]; // Columna F
                const fechaColumna = row[7];   // Columna H
                const columnaJ = row[9];       // Columna J

                // Comprobar coincidencia de cliente, fecha, línea y que la columna J contenga "<"
                return lineaColumna === linea && clienteColumna === cliente && fechaColumna === fecha && columnaJ.includes('<');
            });

            // Si hay filas que coinciden, las mostramos en la tabla
            if (filteredRows.length > 0) {
    filteredRows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row[0] || ''}</td>   <!-- Columna A (Línea) -->
            <td>${row[1] || ''}</td>   <!-- Columna B (Fecha) -->
            <td>${row[7] || ''}</td>   <!-- Columna H (Fecha Desp) -->
            <td>${row[5] || ''}</td>   <!-- Columna F (Cliente) -->
            <td>${row[2] || ''}</td>   <!-- Columna 1 -->
            <td>${row[11] || ''}</td>  <!-- Columna 2 -->
            <td>${row[10] || ''}</td>  <!-- Columna 3 -->
            <td>${row[37] || ''}</td>  <!-- Columna 4 -->
            <td>${row[39] || ''}</td>  <!-- Columna 5 -->
            <td>${row[9] || ''}</td>   <!-- Columna J -->
            <td>${row[13] || ''}</td>  <!-- Columna N -->
            <td>${row[15] || ''}</td>  <!-- Columna P -->
            <td>${row[16] || ''}</td>  <!-- Columna Q -->
            <td>${row[18] || ''}</td>  <!-- Columna S -->
            <td>${row[20] || ''}</td>  <!-- Columna U -->
            <td>${row[38] || ''}</td>  `;

        resultBody.appendChild(tr);

        // Copiar el valor de "Fecha" (columna B) al campo "fechaprzzz"
        fechaprzzzInput.value = row[1] || ''; // Asignar el valor de la columna B al input de fechaprzzz

        // Copiar el valor de "Fecha Desp" (columna H) al campo "fechadeszzz"
        fechadeszzzInput.value = row[7] || ''; // Asignar el valor al input de tipo date

        // Asignar el valor de "Cliente" (columna F) al select "clientelzzz"
        clientelzzzSelect.value = row[5] || ''; // Asignar el valor al select de cliente

        // Asignar el valor de "Col 1" (columna 1) al select "tipordenzzz"
        tipordenzzzSelect.value = row[2] || ''; // Asignar el valor al select de tipo de orden

        // Asignar el valor de "Col 2" (columna 2) al select "empaquelistzzz"
        empaquelistzzzSelect.value = row[11] || ''; // Asignar el valor al select de empaquelist

        // Asignar el valor de "Col 3" (columna 3) al input "cantidadzzz"
        cantidadzzzInput.value = row[10] || ''; // Asignar el valor al input de cantidad

        // Asignar el valor de "Col 4" (columna 4) al input "observacioneszzz"
        observacioneszzzInput.value = row[37] || ''; // Asignar el valor al input de observaciones

        // Asignar el valor de "Col 5" (columna 5) al input "pozzz"
        pozzzInput.value = row[39] || ''; // Asignar el valor al input de PO

        // Función para procesar una columna con una tabla HTML y asignar valores a los inputs
        function procesarColumnaHtml(colHtml, inputIds) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(colHtml, 'text/html');
            const filasTabla = doc.querySelectorAll('tr');

            filasTabla.forEach((fila, index) => {
                if (index < inputIds.length) {
                    const inputId = inputIds[index];
                    const inputElement = document.getElementById(inputId);
                    if (inputElement) {
                        inputElement.value = fila.textContent.trim();
                    }
                }
            });
        }

        // Asignar valores de "Col J"
        procesarColumnaHtml(row[9] || '', [
            'productlistzzz', 'productlistzzz3', 'productlistzzz4', 'productlistzzz5', 
            'productlistzzz6', 'productlistzzz7', 'productlistzzz8', 
            'productlistzzz9', 'productlistzzz10', 'productlistzzz11'
        ]);

        // Asignar valores de "Col N"
        procesarColumnaHtml(row[13] || '', [
            'talloscajazzz', 'talloscajazzz3', 'talloscajazzz4', 'talloscajazzz5', 
            'talloscajazzz6', 'talloscajazzz7', 'talloscajazzz8', 
            'talloscajazzz9', 'talloscajazzz10', 'talloscajazzz11'
        ]);

        // Asignar valores de "Col P"
        procesarColumnaHtml(row[15] || '', [
            'tallosramozzz', 'tallosramozzz3', 'tallosramozzz4', 'tallosramozzz5', 
            'tallosramozzz6', 'tallosramozzz7', 'tallosramozzz8', 
            'tallosramozzz9', 'tallosramozzz10', 'tallosramozzz11'
        ]);

        // Asignar valores de "Col Q"
        procesarColumnaHtml(row[16] || '', [
            'ramospiezazzz', 'ramospiezazzz3', 'ramospiezazzz4', 'ramospiezazzz5', 
            'ramospiezazzz6', 'ramospiezazzz7', 'ramospiezazzz8', 
            'ramospiezazzz9', 'ramospiezazzz10', 'ramospiezazzz11'
        ]);

        // Asignar valores de "Col S"
        procesarColumnaHtml(row[18] || '', [
            'preciozzz', 'preciozzz3', 'preciozzz4', 'preciozzz5', 
            'preciozzz6', 'preciozzz7', 'preciozzz8', 
            'preciozzz9', 'preciozzz10', 'preciozzz11'
        ]);

        // Asignar valores de "Col U"
        procesarColumnaHtml(row[20] || '', [
            'gradolistzzz', 'gradolistzzz3', 'gradolistzzz4', 'gradolistzzz5', 
            'gradolistzzz6', 'gradolistzzz7', 'gradolistzzz8', 
            'gradolistzzz9', 'gradolistzzz10', 'gradolistzzz11'
        ]);

        // Asignar valores de "Col AM"
        procesarColumnaHtml(row[38] || '', [
            'markzzz', 'markzzz3', 'markzzz4', 'markzzz5', 
            'markzzz6', 'markzzz7', 'markzzz8', 
            'markzzz9', 'markzzz10', 'markzzz11'
        ]);

    });
} else {
    resultBody.innerHTML = '<tr><td colspan="15">No se encontraron resultados</td></tr>';
}
        })
        .catch(error => console.error('Error:', error));
});


/////////////////////
function showFields() {
    var fields = [
        'cantidadzzz', 'observacioneszzz', 'pozzz', 'productout', 'tcajaout', 'ttallosout', 'tallosramoout', 'rapiout', 'traout', 'tpout', 'pout', 'gradout', 'markout', 'atpaout', 'totalsteamout', 'tpreciooutz', 'totaltallosQB', 'totaltallosHB', 'totaltallosEB', 'totaltallosFLL', 'productlistzzz', 'talloscajazzz', 'tallosramozzz', 'ramospiezazzz', 'preciozzz', 'gradolistzzz', 'markzzz',
        'productlistzzz', 'talloscajazzz', 'tallosramozzz', 'ramospiezazzz', 'preciozzz', 'gradolistzzz', 'markzzz', 'totaltalloszzz', 'totalramoszzz', 'tpreciozzz',
        'productlistzzz1', 'talloscajazzz1', 'tallosramozzz1', 'ramospiezazzz1', 'preciozzz1', 'gradolistzzz1', 'markzzz1', 'totaltalloszzz1', 'totalramoszzz1', 'tpreciozzz1',
        'productlistzzz2', 'talloscajazzz2', 'tallosramozzz2', 'ramospiezazzz2', 'preciozzz2', 'gradolistzzz2', 'markzzz2', 'totaltalloszzz2', 'totalramoszzz2', 'tpreciozzz2',
        'productlistzzz3', 'talloscajazzz3', 'tallosramozzz3', 'ramospiezazzz3', 'preciozzz3', 'gradolistzzz3', 'markzzz3', 'totaltalloszzz3', 'totalramoszzz3', 'tpreciozzz3',
        'productlistzzz4', 'talloscajazzz4', 'tallosramozzz4', 'ramospiezazzz4', 'preciozzz4', 'gradolistzzz4', 'markzzz4', 'totaltalloszzz4', 'totalramoszzz4', 'tpreciozzz4',
        'productlistzzz5', 'talloscajazzz5', 'tallosramozzz5', 'ramospiezazzz5', 'preciozzz5', 'gradolistzzz5', 'markzzz5', 'totaltalloszzz5', 'totalramoszzz5', 'tpreciozzz5',
        'productlistzzz6', 'talloscajazzz6', 'tallosramozzz6', 'ramospiezazzz6', 'preciozzz6', 'gradolistzzz6', 'markzzz6', 'totaltalloszzz6', 'totalramoszzz6', 'tpreciozzz6',
        'productlistzzz7', 'talloscajazzz7', 'tallosramozzz7', 'ramospiezazzz7', 'preciozzz7', 'gradolistzzz7', 'markzzz7', 'totaltalloszzz7', 'totalramoszzz7', 'tpreciozzz7',
        'productlistzzz8', 'talloscajazzz8', 'tallosramozzz8', 'ramospiezazzz8', 'preciozzz8', 'gradolistzzz8', 'markzzz8', 'totaltalloszzz8', 'totalramoszzz8', 'tpreciozzz8',
        'productlistzzz9', 'talloscajazzz9', 'tallosramozzz9', 'ramospiezazzz9', 'preciozzz9', 'gradolistzzz9', 'markzzz9', 'totaltalloszzz9', 'totalramoszzz9', 'tpreciozzz9',
        'productlistzzz10', 'talloscajazzz10', 'tallosramozzz10', 'ramospiezazzz10', 'preciozzz10', 'gradolistzzz10', 'markzzz10', 'totaltalloszzz10', 'totalramoszzz10', 'tpreciozzz10',
        'productlistzzz11', 'talloscajazzz11', 'tallosramozzz11', 'ramospiezazzz11', 'preciozzz11', 'gradolistzzz11', 'markzzz11', 'totaltalloszzz11', 'totalramoszzz11', 'tpreciozzz11',
        'productlistzzz12', 'talloscajazzz12', 'tallosramozzz12', 'ramospiezazzz12', 'preciozzz12', 'gradolistzzz12', 'markzzz12', 'totaltalloszzz12', 'totalramoszzz12', 'tpreciozzz12',
        'productlistzzz13', 'talloscajazzz13', 'tallosramozzz13', 'ramospiezazzz13', 'preciozzz13', 'gradolistzzz13', 'markzzz13', 'totaltalloszzz13', 'totalramoszzz13', 'tpreciozzz13',
        'productlistzzz14', 'talloscajazzz14', 'tallosramozzz14', 'ramospiezazzz14', 'preciozzz14', 'gradolistzzz14', 'markzzz14', 'totaltalloszzz14', 'totalramoszzz14', 'tpreciozzz14',
        'productlistzzz15', 'talloscajazzz15', 'tallosramozzz15', 'ramospiezazzz15', 'preciozzz15', 'gradolistzzz15', 'markzzz15', 'totaltalloszzz15', 'totalramoszzz15', 'tpreciozzz15',
        'productlistzzz16', 'talloscajazzz16', 'tallosramozzz16', 'ramospiezazzz16', 'preciozzz16', 'gradolistzzz16', 'markzzz16', 'totaltalloszzz16', 'totalramoszzz16', 'tpreciozzz16',
        'productlistzzz17', 'talloscajazzz17', 'tallosramozzz17', 'ramospiezazzz17', 'preciozzz17', 'gradolistzzz17', 'markzzz17', 'totaltalloszzz17', 'totalramoszzz17', 'tpreciozzz17',
        'productlistzzz18', 'talloscajazzz18', 'tallosramozzz18', 'ramospiezazzz18', 'preciozzz18', 'gradolistzzz18', 'markzzz18', 'totaltalloszzz18', 'totalramoszzz18', 'tpreciozzz18',
        'productlistzzz19', 'talloscajazzz19', 'tallosramozzz19', 'ramospiezazzz19', 'preciozzz19', 'gradolistzzz19', 'markzzz19', 'totaltalloszzz19', 'totalramoszzz19', 'tpreciozzz19',
        'productlistzzz20', 'talloscajazzz20', 'tallosramozzz20', 'ramospiezazzz20', 'preciozzz20', 'gradolistzzz20', 'markzzz20', 'totaltalloszzz20', 'totalramoszzz20', 'tpreciozzz20',
        'productlistzzz21', 'talloscajazzz21', 'tallosramozzz21', 'ramospiezazzz21', 'preciozzz21', 'gradolistzzz21', 'markzzz21', 'totaltalloszzz21', 'totalramoszzz21', 'tpreciozzz21'
    ];

    // Mostrar los divs con id "fila1" a "fila12"
    for (var i = 1; i <= 12; i++) {
        var filaDiv = document.getElementById('fila' + i);
        if (filaDiv) {
            filaDiv.style.display = 'table-row'; // Cambiar a 'block' para hacerlos visibles
        }
    }

    // Mostrar los divs con id "fx1" a "fx12"
    for (var i = 1; i <= 12; i++) {
        var fxDiv = document.getElementById('fx' + i);
        if (fxDiv) {
            fxDiv.style.display = 'table-row'; // Cambiar a 'block' para hacerlos visibles
        }
    }
}
////////////////////

function simulateInteraction() {
    return new Promise((resolve) => {
        const form = document.getElementById('corporateFormzzz');
        
        if (form) {
            const inputs = form.querySelectorAll('input, select, textarea');
            
            inputs.forEach((input) => {
                // Solo simula interacción si el input no está vacío
                if (input.value.trim() !== '') {
                    // Simula interacción enfocando cada campo
                    input.focus(); // Enfoca el campo
                    const event = new Event('input', { bubbles: true }); // Crea evento de entrada
                    input.dispatchEvent(event); // Lanza el evento para registrar la interacción
                }
            });

            resolve(); // Resuelve la promesa inmediatamente después de la interacción
        } else {
            console.error('Formulario no encontrado: corporateFormzzz');
            resolve();
        }
    });
}

////////

   // Seleccionar los elementos de entrada
        const lineaInput = document.getElementById("linea");
        const linea2Input = document.getElementById("linea2");

        // Evento para copiar el valor de 'linea' a 'linea2'
        lineaInput.addEventListener("input", function() {
            linea2Input.value = lineaInput.value;
        });

/////////

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
  document.getElementById('cliente').value = parametros['client-selector'] || '';
  document.getElementById('fecha').value = parametros['date-selector'] || '';
  document.getElementById('fechades').value = parametros['fechades'] || '';
  document.getElementById('clientelzzz').value = parametros['clientelzzz'] || '';
  document.getElementById('linea').value = parametros['linea'] || '';
  document.getElementById('vendedorzzz').value = parametros['vendedorh'] || '';
}

// Llamar a la función para prellenar los inputs al cargar la página
window.addEventListener('DOMContentLoaded', function() {
  prellenarInputs();
});
