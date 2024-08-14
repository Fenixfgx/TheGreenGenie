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

///////////

function clearFields() {
    var fields = [
        'cantidadzzz', 'observacioneszzz','pozzz', 'productout', 'tcajaout','ttallosout', 'tallosramoout', 'rapiout','traout', 'tpout', 'pout','gradout', 'markout', 'atpaout', 'totalsteamout','tpreciooutz', 'totaltallosQB', 'totaltallosHB', 'atpazzz3','atpazzz4','atpazzz5','atpazzz6','atpazzz7','atpazzz8','atpazzz9','atpazzz10','atpazzz11', 'atpazzz','totaltallosEB','totaltallosFLL', 'productlistzzz', 'talloscajazzz', 'tallosramozzz', 'ramospiezazzz', 'preciozzz', 'gradolistzzz', 'markzzz',
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
