document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Llamar a la función de verificación
      verifyLogin(username, password);
    });

    async function verifyLogin(username, password) {
      // Obtener el spreadsheetId de la hoja "IDAPI"
      const spreadsheetIdResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1neDLIsgyhW7YUYvfVPp6ef990j1tsZOhRC7WYQESlDE/values/IDAPI!A1?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8`);
      const spreadsheetIdData = await spreadsheetIdResponse.json();
      const spreadsheetId = spreadsheetIdData.values[0][0];

      // Llamar a la API de Google Sheets con el spreadsheetId obtenido
      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/PW!A2:C2?key=AIzaSyC7trVxLML3qsNu1jYg7Qmmgc-RuWsMZg8`);
      const data = await response.json();

      // Obtener los valores de usuario, contraseña y URL de la hoja de cálculo
      const storedUsername = data.values[0][0];
      const storedPassword = data.values[0][1];
      const redirectURL = data.values[0][2];

      // Verificar si el usuario y la contraseña coinciden
      if (username === storedUsername && password === storedPassword) {
        // Mostrar el iframe con el contenido de la URL obtenida
        document.getElementById('contentFrame').src = redirectURL;
        document.getElementById('iframeContainer').classList.remove('hidden');

        // Ocultar el formulario de login
        document.getElementById('loginContainer').classList.add('hidden');
      } else {
        // Mostrar un mensaje de error utilizando SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Contraseña Incorrecta',
          confirmButtonText: 'OK'
        });
      }
    }