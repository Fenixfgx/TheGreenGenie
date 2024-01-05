const API_KEY = 'AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8';
const SPREADSHEET_ID = '1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w';

document.addEventListener('DOMContentLoaded', function () {
  cargarDatos(); // Cargar todos los datos al cargar la página
});

function cargarDatos() {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/MUISCAOUT?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Muestra los datos obtenidos en la consola
      const values = data.values;

      if (values) {
        mostrarTabla(values);
      } else {
        console.log('No se encontraron datos');
      }
    })
    .catch(error => {
      console.error('Error al obtener datos: ', error);
    });
}

function buscarPorFecha() {
  const fecha = document.getElementById('fechaInput').value;

  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/MUISCAOUT?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const values = data.values;

      if (values) {
        const filteredData = values.filter(row => row[0] === fecha);
        console.log(filteredData); // Muestra los datos filtrados en la consola
        mostrarTabla(filteredData);
      } else {
        console.log('No se encontraron datos');
      }
    })
    .catch(error => {
      console.error('Error al obtener datos: ', error);
    });
}

function mostrarTabla(data) {
  const table = document.getElementById('tablaDatos');
  table.innerHTML = ''; // Limpiar tabla

  const columnInicio = 1; // Índice de la columna "B"
  const columnFin = 25; // Índice de la columna "Z"

  if (data.length > 0) {
    data.forEach(row => {
      const tr = document.createElement('tr');
      for (let i = columnInicio; i <= columnFin; i++) {
        const td = document.createElement('td');
        td.textContent = row[i] || ''; // Agregar el contenido de la celda o un string vacío si no hay datos
        tr.appendChild(td);
      }
      table.appendChild(tr);
    });
  } else {
    const noDataRow = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = 'No se encontraron datos para esa fecha.';
    td.colSpan = columnFin - columnInicio + 1; // Definir el número de columnas para la celda
    noDataRow.appendChild(td);
    table.appendChild(noDataRow);
  }
}

function exportToXLS() {
  const table = document.getElementById('tablaDatosimp');
  const wb = XLSX.utils.table_to_book(table, { sheet: 'Datos' });
  const wbout = XLSX.write(wb, { bookType: 'xls', type: 'binary' });

  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
  const date = new Date().toISOString().slice(0, 10);
  const filename = `MuiscaTheGreenGenie${date}.xls`;

  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    // Otros navegadores
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}