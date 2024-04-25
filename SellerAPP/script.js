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
              

              
const vendedor = document.getElementById('vendedorh');

// Asignar el valor por defecto al input
vendedor.value = username;
              
 setTimeout(function() {
        document.getElementById('fetchButton').click();
    }, 1000);             
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
    if (leftContent) {
        rightContent.style.display = 'block';
        leftContent.style.display = 'block';
        rightContent.style.width = '96%';
        leftContent.style.width = '100%';
        corporateForm.style.display = 'block';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';
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
    var relItem = document.querySelector('.rel'); // Selecciona el elemento con la clase "rel"

    if (leftContent) {
        rightContent.style.maxWidth = '1000px';
        rightContent.style.width = '165%';
        rightContent.style.marginLeft = '12px';
        leftContent.style.display = 'none';
        rightContent.style.display = 'block';
        corporateForm.style.display = 'grid';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';

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
    var relItem = document.querySelector('.rel'); // Selecciona el elemento con la clase "rel"
    var formItem = document.querySelector('.form-group');
  
    if (leftContent) {
        leftContent.style.width = '165%';
        leftContent.style.marginLeft = '-7px';
        rightContent.style.display = 'none';
        leftContent.style.display = 'block';
        addclient.style.display = 'none';
        adminclients.style.display = 'none';

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}

function addClient() {
    var leftContent = document.getElementById('left-content');
    var rightContent = document.getElementById('right-content');
    var addclient = document.getElementById('addClient');
    var adminclients = document.getElementById('adminClients');
    var relItem = document.querySelector('.rel'); // Selecciona el elemento con la clase "rel"
    var formItem = document.querySelector('.form-group');
  
    if (leftContent) {
        rightContent.style.display = 'none';
        leftContent.style.display = 'none';
        addclient.style.display = 'block';
        adminclients.style.display = 'none';
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
    var relItem = document.querySelector('.rel'); // Selecciona el elemento con la clase "rel"
    var formItem = document.querySelector('.form-group');
  
    if (leftContent) {
        rightContent.style.display = 'none';
        leftContent.style.display = 'none';
        addclient.style.display = 'none';
        adminclients.style.display = 'block';

        // Verifica si es una versión móvil (ancho de ventana menor o igual a 767px)
        if (window.innerWidth <= 767) {
            relItem.style.display = 'none'; // Oculta el elemento con la clase "rel"
        }
    } else {
        console.error('Elemento "left-content" no encontrado');
    }
}

// Obtener la ruta actual del navegador
        const currentUrl = window.location.pathname;

        // Buscar el último segmento de la ruta como token
        const segments = currentUrl.split('/');
        const lastSegment = segments[segments.length - 1];

        // Verificar si se encontró un valor en el último segmento de la ruta
        if (lastSegment) {
            // Obtener referencia al campo de entrada
            const tokenInput = document.getElementById('token');

            // Establecer el valor del campo de entrada con el valor del último segmento de la ruta
            tokenInput.value = lastSegment;
        }
