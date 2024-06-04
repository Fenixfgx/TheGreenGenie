    // ID de la hoja de cálculo y API Key
const SHEET_ID = '1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w';
const API_KEY = 'AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8';

// Columnas que queremos mostrar en la tabla principal
const COLUMNS_TO_DISPLAY_MAIN = [5, 3, 6, 45, 46, 34];
const COLUMNS_TO_DISPLAY_MODAL = [2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const SEARCH_COLUMN_INDEX = 34; // Índice de la columna "AI"

const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/PROGRAMORD?key=${API_KEY}`;
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpIeQch_inRSyP-ZRXWbh1XQ8dogioUrZzvdGEQDOzEvtnDwl8Djv3Xai6_iQjdFKS/exec';

let sheetData = []; // Variable para almacenar los datos de la hoja

// Función para cargar y mostrar los datos de la hoja de cálculo
async function loadSheet() {
    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();
        sheetData = data.values;

        if (sheetData.length > 0) {
            displaySheetData(sheetData);
        } else {
            console.error('No se encontraron datos en la Base.');
        }
    } catch (error) {
        console.error('Error al cargar Base:', error);
    }
  filterRows();
}

// Función para mostrar los datos de la hoja de cálculo en la tabla principal
function displaySheetData(data) {
    const sheetContainer = document.getElementById('sheet-container');
    sheetContainer.innerHTML = ''; // Limpiar contenido anterior

    const table = document.createElement('table');

    // Agregar encabezados de tabla
    const headerRow = document.createElement('tr');
    COLUMNS_TO_DISPLAY_MAIN.forEach(index => {
        const headerCell = document.createElement('th');
        headerCell.textContent = data[0][index];
        headerRow.appendChild(headerCell);
    });

    const detailsHeaderCell = document.createElement('th');
    detailsHeaderCell.textContent = 'Acciones';
    headerRow.appendChild(detailsHeaderCell);

    table.appendChild(headerRow);

    // Agregar filas de datos
    data.slice(1).forEach((rowData, rowIndex) => {
        if (rowData[0] === '1') { // Verificar si la columna A tiene el valor "1"
            const row = document.createElement('tr');
            row.id = `row-${rowIndex}`; // Agregar un ID único a cada fila
            COLUMNS_TO_DISPLAY_MAIN.forEach(index => {
                const cell = document.createElement('td');
                cell.textContent = rowData[index];
                row.appendChild(cell);
            });

            // Agregar la celda del botón de detalles
            const actionsCell = document.createElement('td');
            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Detalle';
            detailsButton.onclick = () => showDetails(rowData[4], rowData[44], rowData[5], rowData[45], rowData[48], rowData[46]);
            actionsCell.appendChild(detailsButton);
                     
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.className = 'deleteButton';
            deleteButton.onclick = () => confirmDelete(rowIndex + 2); // Pasar el índice de la fila
            actionsCell.appendChild(deleteButton);

            row.appendChild(actionsCell);
            table.appendChild(row);
        } else {
            const row = document.createElement('tr');
            row.id = `row-${rowIndex}`; // Agregar un ID único a cada fila
            row.style.display = 'none'; // Ocultar las filas que no coincidan con el filtro
            COLUMNS_TO_DISPLAY_MAIN.forEach(() => {
                const cell = document.createElement('td');
                cell.textContent = ''; // Dejar las celdas vacías para mantener el formato
                row.appendChild(cell);
            });
            table.appendChild(row);
        }
    });

    sheetContainer.appendChild(table);
}

// Función para confirmar y eliminar la fila
function confirmDelete(rowId) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta acción no se puede deshacer.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteRow(rowId);
        }
    });
}

// Función para cambiar el estado de la columna "AU"
async function toggleStatus(rowIndex, currentStatus) {
    console.log('Datos enviados:', { rowIndex, currentStatus });

    const newStatus = currentStatus === 'ACTIVO' ? 'INACTIVO' : 'ACTIVO';
    const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rowIndex, newStatus })
    });

    if (response.ok) {
        console.log('Estado cambiado correctamente');
        loadSheet();
    } else {
        console.error('Error al cambiar el estado');
    }
}

// Función para filtrar las filas basadas en el valor de la columna "AI"
function filterRows() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const rows = document.querySelectorAll('tr[id^="row-"]'); // Seleccionar todas las filas con ID que comienza con "row-"

    rows.forEach(row => {
        const aiColumnValue = row.querySelector('td:nth-child(6)').textContent.toLowerCase(); // Obtener el valor de la columna AI (quinta columna)
        if (aiColumnValue.includes(searchTerm)) {
            row.style.display = ''; // Mostrar la fila si el término de búsqueda está contenido en la columna AI
        } else {
            row.style.display = 'none'; // Ocultar la fila si el término de búsqueda no coincide
        }
    });
}

// Función para mostrar los detalles en un SweetAlert con filtro
function showDetails(col5Value, col45Value, cliente, dia, chainn, statusx) {
    // HTML para el formulario dentro del SweetAlert
    const formHtml = `
        <form id="delete-form" style="display:none;">
            <label for="filter-col5">Filtrar por Columna 5:</label>
            <input type="text" id="filter-col5" value="${col5Value}" /><br>
            <label for="filter-col45">Filtrar por Columna 45:</label>
            <input type="text" id="filter-col45" value="${col45Value}" /><br>
            <button type="button" id="apply-filter">Aplicar Filtro</button>
            <button type="button" id="delete-rows">Eliminar Filas</button>
        </form>
        <div id="filtered-table"></div>
        <form id="activoinactivo" >
    <div >
        <label for="chain">Chain</label>
        <input type="text" id="chain" name="chain" value="${chainn}">
    </div>
    <h4 style="margin: 0px;">Estado Actual: ${statusx}</h4>
    <div class="form-group">
        <label for="activador"></label>
        <select type="text" id="activador" name="activador" style="text-align: center;" required>
          <option value="ACTIVO">ACTIVAR</option>
          <option value="INACTIVO">DESACTIVAR</option>
         </select> 
    </div>

    <button type="submit">Actualizar Estado</button> 
</form>
    `;

    Swal.fire({
        title: `${cliente} / ${dia}`,
        html: formHtml,
        width: '98%',
        didOpen: () => {
          document.getElementById('activoinactivo').addEventListener('submit', function(event) {
event.preventDefault(); // Evitar el envío por defecto del formulario
// Obtener los valores de los campos de entrada
var chain = document.getElementById('chain').value;
var activador = document.getElementById('activador').value;
// Llamar a la función para guardar en la hoja de cálculo
guardarEnHojaDeCalculo(chain, activador);});
document.getElementById('apply-filter').addEventListener('click', applyModalFilter);
            document.getElementById('delete-rows').addEventListener('click', () => {
                const filterCol5 = document.getElementById('filter-col5').value;
                const filterCol45 = document.getElementById('filter-col45').value;
                eliminarFilas(filterCol45);
                Swal.close();
            });
          applyModalFilter();
        },
        confirmButtonText: 'Cerrar'
    });
}

// Función para aplicar el filtro dentro del SweetAlert
function applyModalFilter() {
    const filterCol5 = document.getElementById('filter-col5').value.toLowerCase();
    const filterCol45 = document.getElementById('filter-col45').value.toLowerCase();

    let filteredData = sheetData.filter((rowData, rowIndex) => {
        if (rowIndex === 0) return true; // Incluir siempre la fila de encabezados
        const col5Matches = rowData[4] && rowData[4].toLowerCase().includes(filterCol5);
        const col45Matches = rowData[44] && rowData[44].toLowerCase().includes(filterCol45);
        return col5Matches && col45Matches;
    });

    // Crear una tabla HTML con los datos filtrados
    let filteredTableHtml = '<table border="1" style="width: 1300px; font-size:13px; text-align: left;">';
    filteredTableHtml += '<tr>';
    COLUMNS_TO_DISPLAY_MODAL.forEach(index => {
        filteredTableHtml += `<th>${sheetData[0][index]}</th>`;
    });
    filteredTableHtml += '</tr>';

    filteredData.slice(1).forEach(rowData => {
        filteredTableHtml += '<tr>';
        COLUMNS_TO_DISPLAY_MODAL.forEach(index => {
            filteredTableHtml += `<td>${rowData[index]}</td>`;
        });
        filteredTableHtml += '</tr>';
    });

    filteredTableHtml += '</table>';

    // Actualizar el contenido del SweetAlert con los datos filtrados
    document.getElementById('filtered-table').innerHTML = filteredTableHtml;
  }

// Función para eliminar filas específicas
async function eliminarFilas(filterCol5, filterCol45) {
    const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filterCol5, filterCol45 })
    });

    if (response.ok) {
        console.log('Filas eliminadas correctamente');
        loadSheet();
    } else {
        console.error('Error al eliminar las filas');
    }
}



async function deleteRow(rowId) {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwT15ZBDqUZdMWTdwzQ9i_kjsnSBEEMrYeErqfoXO6kneH7GxjRwDgMTxbw9-KccAur/exec', {
        method: 'POST',
        body: JSON.stringify({ row: rowId })
    });
    if (response.ok) {
        console.log('Row deleted successfully');
        alert ('Eliminado')
        loadSheet();
    } else {
        console.error('Error deleting row');
    }
}

// Cargar la hoja de cálculo al cargar la página
window.onload = loadSheet;