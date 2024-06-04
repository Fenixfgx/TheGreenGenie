document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtenemos el token ingresado por el usuario
    const token = document.getElementById('token').value;

    // Realizamos la petición a la hoja de cálculo de Google Sheets
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w/values/CD!A:E?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8')
        .then(response => response.json())
        .then(data => {
            // Verificamos si el token coincide con algún valor de la columna C
            const row = data.values.find(row => row[2] === token);

            if (row) {
                // Si hay coincidencia, mostramos el valor correspondiente de la columna A
                const username = row[0];
                const welcome = row[3];
                const imageLink = row[4]; // Obtener el enlace de la columna E
                
// Obtener el input de búsqueda por su ID
const searchInput = document.getElementById('searchInput');

// Asignar el valor por defecto al input
searchInput.value = username;

// Llamar a la función de búsqueda
search();
        
const searchInputx = document.getElementById('searchInputx');

// Asignar el valor por defecto al input
searchInputx.value = username;
              
searchx();
             
const vendedor2 = document.getElementById('vendedor');

// Asignar el valor por defecto al input
vendedor2.value = username;     
              
const vendedor3 = document.getElementById('search-input');

// Asignar el valor por defecto al input
vendedor3.value = username;  
         
              
const vendedor = document.getElementById('vendedorh');

// Asignar el valor por defecto al input
vendedor.value = username;
              
const vendedorh2 = document.getElementById('vendedorh2');

// Asignar el valor por defecto al input
vendedorh2.value = username;
              
 setTimeout(function() {
        document.getElementById('fetchButton').click();
    }, 1000);  
              
              setTimeout(function() {
        updateConcatenatedValue();
    }, 1500);  

              // Actualizar la imagen dinámicamente
                document.getElementById('userImage').src = imageLink;

                document.getElementById('welcomeMessage').innerText = `${username}`;
                document.getElementById('welcomeMessage').style.display = 'block';
                document.getElementById('primero').style.display = 'block';
                Swal.fire(`¡${welcome}, ${username}!`, ``, 'success');

                // Ocultar elementos del formulario
                document.getElementById('token').style.display = 'none';
                document.querySelector('button[type="submit"]').style.display = 'none';
                document.getElementById('token-image').style.display = 'none';
                document.getElementById('token-back').style.display = 'none';
                document.querySelector('h2').style.display = 'none';
                document.querySelector('searchb').style.display = 'block'; 
               
            } else {
                // Si no hay coincidencia, mostramos un mensaje de error
                Swal.fire('Error', 'El token no es correcto', 'error');
            }
        })
        .catch(error => console.error('Error:', error));
});


///////////



////////////////////////////////////////////////


const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

/////////////////////////


function mostrarDuo() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var corporateForm = document.getElementById('corporateForm');
    var del = document.querySelectorAll('.deleteButton');
    var det = document.querySelectorAll('.detailsButton');
    var searchi = document.getElementById('searchInputColumnA');
    var preciosxClients = document.getElementById('preciosxClients');
    var programord = document.getElementById('programord');
    var sub1 = document.getElementById('sub1');
    var sub2 = document.getElementById('sub2');
    var fg = document.getElementById('fg');
    var fd = document.getElementById('fd');
    var diap = document.getElementById('diaprog');
    var programordg = document.getElementById('programordg');

  
    if (leftContent) {
        rightContent.style.display = 'block';
        leftContent.style.display = 'block';
        rightContent.style.width = '96%';
        leftContent.style.width = '100%';
        corporateForm.style.display = 'block';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        sub1.style.display = 'block';
        sub2.style.display = 'none';
        fg.style.display = 'block';
        fd.style.display = 'block';
        diap.style.display = 'none';
        programordg.style.display = 'none';
        searchi.value = '1';
        
      
      // Ocultar todos los elementos con la clase .deleteButton
        del.forEach(function(button) {
            button.style.display = 'none';
        });
      
      det.forEach(function(button) {
            button.style.display = 'contents';
        });
      search();
        } else {
        console.error('Elemento "left-content" no encontrado');
    }
}

function ocultarDiv() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var corporateForm = document.getElementById('corporateForm');
    var relItem = document.querySelector('.rel'); 
    var preciosxClients = document.getElementById('preciosxClients');
    var programord = document.getElementById('programord');
    var sub1 = document.getElementById('sub1');
    var sub2 = document.getElementById('sub2');
    var fg = document.getElementById('fg');
    var fd = document.getElementById('fd');
    var diap = document.getElementById('diaprog');
    var programordg = document.getElementById('programordg');


    if (leftContent) {
        rightContent.style.maxWidth = '1000px';
        rightContent.style.width = '165%';
        rightContent.style.marginLeft = '12px';
        leftContent.style.display = 'none';
        rightContent.style.display = 'block';
        corporateForm.style.display = 'grid';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        programordg.style.display = 'none';
        sub1.style.display = 'block';
        sub2.style.display = 'none';
        fg.style.display = 'block';
        fd.style.display = 'block';
        diap.style.display = 'none';

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}

function listaDiv() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var relItem = document.querySelector('.rel');
    var del = document.querySelectorAll('.deleteButton'); 
    var det = document.querySelectorAll('.detailsButton');
    var formItem = document.querySelector('.form-group');
    var searchi = document.getElementById('searchInputColumnA');  
    var preciosxClients = document.getElementById('preciosxClients');
    var programord = document.getElementById('programord');
    var programordg = document.getElementById('programordg');
    
  
    if (leftContent) {
        leftContent.style.width = '165%';
        leftContent.style.marginLeft = '-7px';
        rightContent.style.display = 'none';
        leftContent.style.display = 'block';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        programordg.style.display = 'none';
        
        searchi.value = '1';
        
      
       // Ocultar todos los elementos con la clase .deleteButton
        del.forEach(function(button) {
            button.style.display = 'none';
        });
      
      det.forEach(function(button) {
            button.style.display = 'contents';
        });

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
      search();
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}


function listaOrd() {  
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var relItem = document.querySelector('.rel'); 
    var del = document.querySelectorAll('.deleteButton');
    var det = document.querySelectorAll('.detailsButton');
    var formItem = document.querySelector('.form-group');
    var searchi = document.getElementById('searchInputColumnA');
    var preciosxClients = document.getElementById('preciosxClients');
    var programord = document.getElementById('programord');
    var programordg = document.getElementById('programordg');

      
    if (leftContent) {
        leftContent.style.width = '165%';
        leftContent.style.marginLeft = '-7px';
        rightContent.style.display = 'none';
        leftContent.style.display = 'block';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        programordg.style.display = 'none';
        searchi.value = ''; 


        // Ocultar todos los elementos con la clase .detailsButton
        det.forEach(function(button) {
            button.style.display = 'none';
        });

        // Mostrar todos los elementos con la clase .deleteButton
        del.forEach(function(button) {
            button.style.display = 'contents';
        });


        // Verificar si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Ocultar el elemento con la clase "rel"
        }
      
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
  search();
  
  setTimeout(function() {
  listaOrd1();
  }, 400);
}

function listaOrd1() {
     var del = document.querySelectorAll('.deleteButton');
    var det = document.querySelectorAll('.detailsButton');
  
  det.forEach(function(button) {
            button.style.display = 'none';
        });

        // Mostrar todos los elementos con la clase .deleteButton
        del.forEach(function(button) {
            button.style.display = 'contents';
        });
}

function addClient() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var relItem = document.querySelector('.rel'); 
    var preciosxClients = document.getElementById('preciosxClients');
    var formItem = document.querySelector('.form-group');
    var programord = document.getElementById('programord');
    var programordg = document.getElementById('programordg');

  
    if (leftContent) {
        rightContent.style.display = 'none';
        leftContent.style.display = 'none';
        addclient.style.display = 'block';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        programordg.style.display = 'none';
        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}


function adminClients() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var relItem = document.querySelector('.rel'); 
    var preciosxClients = document.getElementById('preciosxClients');
    var formItem = document.querySelector('.form-group');
    var programord = document.getElementById('programord');
    var programordg = document.getElementById('programordg');

  
    if (leftContent) {
        rightContent.style.display = 'none';
        leftContent.style.display = 'none';
        addclient.style.display = 'none';
        adminclients.style.display = 'block';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        programordg.style.display = 'none';

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}


function programord() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var relItem = document.querySelector('.rel'); 
    var preciosxClients = document.getElementById('preciosxClients');
    var programord = document.getElementById('programord');
    var programordg = document.getElementById('programordg');
    var sub1 = document.getElementById('sub1');
    var sub2 = document.getElementById('sub2');
    var fg = document.getElementById('fg');
    var fd = document.getElementById('fd');
    var diap = document.getElementById('diaprog');
    var formItem = document.querySelector('.form-group');
  
    if (leftContent) {
        rightContent.style.display = 'block';
        leftContent.style.display = 'none';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        programordg.style.display = 'none';
        sub1.style.display = 'none';
        sub2.style.display = 'block';
        fg.style.display = 'none';
        fd.style.display = 'none';
        diap.style.display = 'block';
        rightContent.style.maxWidth = '1000px';
        rightContent.style.width = '165%';
        rightContent.style.marginLeft = '12px';
        corporateForm.style.display = 'grid';

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}

function programordg() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var relItem = document.querySelector('.rel'); 
    var preciosxClients = document.getElementById('preciosxClients');
    var programord = document.getElementById('programord');
    var programordg = document.getElementById('programordg');
    var sub1 = document.getElementById('sub1');
    var sub2 = document.getElementById('sub2');
    var fg = document.getElementById('fg');
    var fd = document.getElementById('fd');
    var diap = document.getElementById('diaprog');
    var formItem = document.querySelector('.form-group');
  
    if (leftContent) {
        rightContent.style.display = 'none';
        leftContent.style.display = 'none';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'none';
        programord.style.display = 'none';
        programordg.style.display = 'block';
        sub1.style.display = 'none';
        sub2.style.display = 'none';
        fg.style.display = 'none';
        fd.style.display = 'none';
        diap.style.display = 'block';
        rightContent.style.maxWidth = '1000px';
        rightContent.style.width = '165%';
        rightContent.style.marginLeft = '12px';
        corporateForm.style.display = 'grid';
        loadSheetxd();

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}

function preciosxClients() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var preciosxClients = document.getElementById('preciosxClients');
    var programord = document.getElementById('programord');
    var relItem = document.querySelector('.rel'); // Selecciona el elemento con la clase "rel"
    var formItem = document.querySelector('.form-group');
    var programordg = document.getElementById('programordg');
  
    if (leftContent) {
        rightContent.style.display = 'none';
        leftContent.style.display = 'none';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
        preciosxClients.style.display = 'block';
        programord.style.display = 'none';
        programordg.style.display = 'none';
        fetchClientes();

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}
// Obtener los parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);
        
        // Obtener el valor del parámetro 'token' si está presente
        const token = urlParams.get('token');
        
        // Verificar si se encontró un valor para el token
        if (token) {
            // Obtener referencia al campo de entrada
            const tokenInput = document.getElementById('token');
            
            // Establecer el valor del campo de entrada con el valor del token
            tokenInput.value = token;
        }




// Configuración de la API de Google Sheets
    gapi.load('client', initClient);

    async function initClient() {
        await gapi.client.init({
            'apiKey': 'AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8', // Reemplaza con tu propia API Key
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest'],
        });
    }

// Función para buscar en la hoja de cálculo utilizando la API de Google Sheets
async function buscarEnHojaDeCalculo(valorColumnaA) {
    const spreadsheetId = '1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w';
    const range = 'ClientesPrice!A:B'; // Rango que incluye las columnas A y B
    const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    });
    const values = response.result.values;

    if (values) {
        for (let row of values) {
            if (row[0] === valorColumnaA) {
                return row[1]; // Devuelve el valor de la columna B si se encuentra una coincidencia en la columna A
            }
        }
    }

    return '';
}
    // Obtener los elementos select y los inputs
    const clientSelect = document.getElementById('clientel');
    const productSelect = document.getElementById('productlist');
    const concatenatedInput = document.getElementById('concatenatedValues');
    const resultadoBusquedaInput = document.getElementById('precio');

    // Agregar event listener a los select
    clientSelect.addEventListener('change', updateConcatenatedValue);
    productSelect.addEventListener('change', updateConcatenatedValue);

    // Función para actualizar el valor concatenado y realizar la búsqueda en la hoja de cálculo
    async function updateConcatenatedValue() {
        // Obtener los valores seleccionados
        const selectedClient = clientSelect.value.trim();
        const selectedProduct = productSelect.value.trim();
        
        // Concatenar los valores seleccionados
        const concatenatedValue = (selectedClient + ' ' + selectedProduct).trim();

        // Mostrar el valor concatenado en el input text
        concatenatedInput.value = concatenatedValue;

        // Realizar la búsqueda en la hoja de cálculo
        const valorEncontrado = await buscarEnHojaDeCalculo(concatenatedValue);

        // Mostrar el resultado de la búsqueda en el input correspondiente
        resultadoBusquedaInput.value = valorEncontrado;
      
    }


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Llamar a fetchClientes() después de un segundo
        fetchClientes();

        // Función para obtener y mostrar la lista de clientes
        function fetchClientes() {
            fetch('https://sheets.googleapis.com/v4/spreadsheets/1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w/values/Clientes!B:E?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8')
                .then(response => response.json())
                .then(data => {
                    var clientes = data.values; // Obtener todos los clientes

                    var select = document.getElementById('cliente2');
                    select.innerHTML = ''; // Limpiar la lista desplegable

                    // Si se proporciona un vendedor, filtrar la lista de clientes
                    var vendedor = document.getElementById('vendedorh2').value;
                    if (vendedor) {
                        clientes = clientes.filter(row => row[3] === vendedor).map(row => row[0]);
                    }

                    // Agregar las opciones de clientes al select
                    clientes.forEach(cliente => {
                        var option = document.createElement('option');
                        option.value = cliente;
                        option.textContent = cliente;
                        select.appendChild(option);
                    });
                })
                .catch(error => {
                    console.error('Error al obtener la lista de clientes:', error);
                });
        }
    }, 5200); // 1000 milisegundos = 1 segundo

    // Agregar event listener al cambio en los select de cliente y producto
    document.getElementById('cliente2').addEventListener('change', updateConcatenatedValues);
    document.getElementById('productlist2').addEventListener('change', updateConcatenatedValues);

    // Función para concatenar los valores de cliente y producto
    function updateConcatenatedValues() {
        var cliente = document.getElementById('cliente2').value;
        var producto = document.getElementById('productlist2').value;
        var concatenatedValues = cliente + ' ' + producto;
        document.getElementById('concatenatedValues2').value = concatenatedValues;

        // Llamar a la función para buscar el precio
        fetchPrecio(concatenatedValues);
    }

// Función para buscar el precio correspondiente en la hoja de cálculo "ClientesPrice"
function fetchPrecio(concatenatedValues) {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1BMbB6UQLeGXIKAYJZoE67oiSXbqx-7qsDHaozbYPa1w/values/ClientesPrice!A:B?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8')
        .then(response => response.json())
        .then(data => {
            var precios = data.values; // Obtener todos los precios

            // Buscar coincidencia en la hoja de cálculo "ClientesPrice"
            var precio = precios.find(row => row[0] === concatenatedValues);
var productlist2 = document.getElementById('productlistexe');
        productlist2.style.display = 'block';
            // Si se encontró el precio, asignarlo al campo de entrada correspondiente
            if (precio && precio[1] !== undefined) {
                document.getElementById('precio2').value = precio[1];
              sit();
            } else {
                // Si no se encontró el precio, asignar un valor por defecto o dejar vacío el campo de entrada
                document.getElementById('precio2').value = '';
            }
        })
        .catch(error => {
            console.error('Error al obtener el precio:', error);
        });
}
});

document.getElementById('token').addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });


// Función para guardar los datos en la hoja de cálculo
function guardarEnHojaDeCalculo(chain, activador) {
    fetch('https://script.google.com/macros/s/AKfycbyh-_zQKpG7iQmVgfVti_hj6Kc5ROtmwvX66ROM7MYwbRd8boeNF0BcjbyW-HYVJ-GjwQ/exec', {
        method: 'POST',
        body: JSON.stringify({
            chain: chain,
            activador: activador
        })
    })
    .then(response => {
        if (response.ok) {
            Swal.fire('Estado Actualizado Satisfactoriamente', '', 'success');
            loadSheetxd();
        } else {
            Swal.fire('Error al Registrar Datos.', '', 'error');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
}
