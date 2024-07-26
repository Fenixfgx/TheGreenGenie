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
        'cantidadzzz', 'productlistzzz', 'talloscajazzz', 'tallosramozzz', 'ramospiezazzz', 'preciozzz', 'gradolistzzz', 'markzzz',
        'productlistzzz3', 'talloscajazzz3', 'tallosramozzz3', 'ramospiezazzz3', 'preciozzz3', 'gradolistzzz3', 'markzzz3',
        'productlistzzz4', 'talloscajazzz4', 'tallosramozzz4', 'ramospiezazzz4', 'preciozzz4', 'gradolistzzz4', 'markzzz4',
        'productlistzzz5', 'talloscajazzz5', 'tallosramozzz5', 'ramospiezazzz5', 'preciozzz5', 'gradolistzzz5', 'markzzz5',
        'productlistzzz6', 'talloscajazzz6', 'tallosramozzz6', 'ramospiezazzz6', 'preciozzz6', 'gradolistzzz6', 'markzzz6',
        'productlistzzz7', 'talloscajazzz7', 'tallosramozzz7', 'ramospiezazzz7', 'preciozzz7', 'gradolistzzz7', 'markzzz7',
        'productlistzzz8', 'talloscajazzz8', 'tallosramozzz8', 'ramospiezazzz8', 'preciozzz8', 'gradolistzzz8', 'markzzz8',
        'productlistzzz9', 'talloscajazzz9', 'tallosramozzz9', 'ramospiezazzz9', 'preciozzz9', 'gradolistzzz9', 'markzzz9',
        'productlistzzz10', 'talloscajazzz10', 'tallosramozzz10', 'ramospiezazzz10', 'preciozzz10', 'gradolistzzz10', 'markzzz10',
        'productlistzzz11', 'talloscajazzz11', 'tallosramozzz11', 'ramospiezazzz11', 'preciozzz11', 'gradolistzzz11', 'markzzz11',
        'productlistzzz12', 'talloscajazzz12', 'tallosramozzz12', 'ramospiezazzz12', 'preciozzz12', 'gradolistzzz12', 'markzzz12'
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