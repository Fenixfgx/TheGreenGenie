document.getElementById('reloadButton').addEventListener('click', function() {
  location.reload();
});

// ID de la hoja de cálculo de Google Sheets
const sheetId = '1QbMV4FncWFhlMrq5GysbGQQUjfX1aZwkrRldXePrM20';

// Nombre de la hoja de cálculo
const sheetName = 'report';

// Rango de datos que deseas obtener (columnas A, B y D, a partir de la segunda fila)
const range = `${sheetName}!A2:D`;

// URL de la API de Google Sheets
const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8`;

// Función para obtener y mostrar los datos
function fetchAndDisplayData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('table-body');
            data.values.forEach(row => {
                const [id, nombre, marca, fecha] = row;
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${id}</td>
                    <td>${nombre}</td>
                    <td>${fecha}</td>
                `;
                tableBody.appendChild(newRow);
            });
        })
        .catch(error => console.error('Error al obtener datos: ' + error));
}

// Llama a la función para cargar los datos
fetchAndDisplayData();