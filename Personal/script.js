document.getElementById('reloadButton').addEventListener('click', function() {
  location.reload();
});

// ID de tu hoja de cálculo de Google Sheets
const sheetId = '1QbMV4FncWFhlMrq5GysbGQQUjfX1aZwkrRldXePrM20';

// Rango de celdas que deseas obtener (en este caso, columna A desde la fila 2)
const range = 'Resumen!A2:F';

// URL de la API de Google Sheets
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8`;

// Función para mostrar el modal
function openModal(title, b, c, d, e, f) {
    modalTitle.textContent = title;
    modalB.textContent = b;
    modalC.textContent = c;
    modalD.textContent = d;
    modalE.textContent = e;
    modalF.textContent = f;
  
  // Establece los valores en los campos de entrada
    const horasNominalInput = document.getElementById("horasNominal");
    const horasExtraInput = document.getElementById("horasExtra");
    const NominalInput = document.getElementById("Nominal");
    const ExtraInput = document.getElementById("Extra");
    horasNominalInput.value = e;
    horasExtraInput.value = f;
    NominalInput.value = b;
    ExtraInput.value = c;
  
  // Agrega el símbolo "$" de prefijo a los valores en el modal
    document.getElementById("modalB").textContent = "$" + b;
    document.getElementById("modalC").textContent = "$" + c;
  
  actualizarGrafica();
  actualizarGrafica2();
  
    modal.style.display = 'block';
}



// Cierra el modal cuando se hace clic en la "X"
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cierra el modal cuando se hace clic fuera del modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Función para cargar los datos y mostrarlos en la página
async function loadGoogleSheetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.values && data.values.length > 0) {
            const table = document.createElement('table');

            for (const row of data.values) {
                const name = row[0];
                const b = row[1] || 'N/A';
                const c = row[2] || 'N/A';
                const d = row[3] || 'N/A';
                const e = row[4] || 'N/A';
                const f = row[5] || 'N/A';

                if (name) {
                    const rowElement = table.insertRow();
                    const cell = rowElement.insertCell(0);

                    // Agrega un botón a la celda que muestra el modal con los datos
                    const button = document.createElement('button');
                    button.textContent = name;
                    button.addEventListener('click', function() {
                        openModal(name, b, c, d, e, f);
                    });

                    cell.appendChild(button);
                }
            }

            document.getElementById('table-container').appendChild(table);
        } else {
            console.log('No se encontraron datos en la hoja de cálculo.');
        }
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}



// Llamada a la función para cargar los datos
loadGoogleSheetData();