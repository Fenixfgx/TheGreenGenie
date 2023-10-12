document.getElementById('reloadButton').addEventListener('click', function() {
  location.reload();
});

// script.js
const SPREADSHEET_ID = '1QbMV4FncWFhlMrq5GysbGQQUjfX1aZwkrRldXePrM20';
const API_KEY = 'AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8';

// En el archivo script.js

// Añade las clases para los colores de fondo
function setDayColor(dayElement, color) {
  if (color === "Solo hubo una marcación") {
    dayElement.classList.add('red-background');
  } else if (color === "Dia Domingo o Festivo") {
    dayElement.classList.add('orange-background');
  } else {
    dayElement.classList.add('green-background');
  }
}

function init() {
  gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(() => {
    // Llama a loadNamesAndCalendar inmediatamente
    loadNamesAndCalendar();
    // Llama a loadNamesAndCalendar y loadCalendar cada 3 segundos
    setInterval(() => {
      loadNamesAndCalendar();
      loadCalendar();
    }, 5000);
  });
}

function loadNamesAndCalendar() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'F1!A:A', // Obtiene los nombres de la columna A
  }).then(response => {
    const data = response.result.values;

    const nameSelector = document.getElementById('nameSelector');
    const selectedNameElement = document.getElementById('selectedName'); // Elemento para mostrar el nombre seleccionado
    nameSelector.innerHTML = '<option value="">Seleccione un nombre</option>';

    if (data && data.length > 0) {
      const uniqueNames = new Set(data.slice(1).map(row => row[0]));
      Array.from(uniqueNames).forEach(name => {
        nameSelector.innerHTML += `<option value="${name}">${name}</option>`;
      });
      // Agrega un evento de cambio a la lista desplegable para mostrar el nombre seleccionado
      nameSelector.addEventListener('change', function() {
        selectedNameElement.textContent = `Perfil Seleccionado: ${this.value}`;
        loadCalendar(); // Carga el calendario al cambiar la selección
      });
    }
  });
}

// En el archivo script.js

// ... (código anterior)

function loadCalendar() {
  const nameSelector = document.getElementById('nameSelector');
  const selectedName = nameSelector.value;

  if (!selectedName) {
    return;
  }

  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'F1!A:O', // Asegúrate de incluir la columna "O"
  }).then(response => {
    const data = response.result.values;

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    // Filtra las filas que corresponden al nombre seleccionado
    const attendedDays = data
      .filter(row => row[0] === selectedName)
      .map(row => {
        const date = new Date(row[5]);
        return {
          day: date.getDate(),
          month: date.getMonth(),
          dayOfWeek: date.toLocaleDateString('es-ES', { weekday: 'short' }),
          date: date,
          color: row[14], // Columna "O"
          rowData: row, // Almacenar toda la fila
        };
      });

    // Ordena las fechas de asistencia de más antigua a más reciente
    attendedDays.sort((a, b) => a.date - b.date);

    // Muestra las fechas ordenadas en el calendario con colores y agrega un evento de clic
    attendedDays.forEach(dayData => {
      const dayElement = document.createElement('div');
      dayElement.textContent = `${dayData.dayOfWeek}, ${dayData.day} ${getMonthName(dayData.month)}`;
      dayElement.classList.add('day');
      setDayColor(dayElement, dayData.color); // Aplica el color de fondo
      dayElement.addEventListener('click', function() {
        showSweetAlert(dayData.rowData); // Mostrar alerta al hacer clic en el día
      });
      calendar.appendChild(dayElement);
    });
  });
}
// Función para mostrar SweetAlert con la información de la fila
function showSweetAlert(rowData) {
  const [name, b, c, d, e, f, g, h, i, j, k, l, m, n, o] = rowData; // Extraer los datos de la fila
  const novedades = o || "Ninguna";
  
  // Usar SweetAlert2 para mostrar una alerta personalizada
  Swal.fire({
    title: name,
    html: `<div>Fecha: ${f}</div><div>Novedades: ${novedades}</div><div>Hora de Entrada: ${b}</div><div>Ingreso a Almuerzo: ${c}</div><div>Regreso de Almuerzo: ${d}</div><div>Hora de Salida: ${e}</div>`,
    icon: 'info',
  });
}


function getMonthName(month) {
  const months = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  return months[month];
}

gapi.load('client', init);