let input = document.getElementById('input');
let result = document.getElementById('result');
let inputMultiplicacion = document.getElementById('inputMultiplicacion');
let tasaMonedaInput = document.getElementById('tasaMoneda');
let resultMultiplicacion = document.getElementById('resultMultiplicacion');

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});

function addToInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = '';
}

function calculate() {
    try {
        let expression = input.value;

        // Reemplazar los signos "+" y "-" por separadores ","
        expression = expression.replace(/\+/g, ',').replace(/\-/g, ',-');

        // Dividir la expresión en partes usando ","
        const parts = expression.split(',');

        // Inicializar las variables para las horas y los minutos
        let totalHours = 0;
        let totalMinutes = 0;

        // Iterar sobre las partes
        for (const part of parts) {
            // Dividir cada parte en horas y minutos
            const [hours, minutes] = part.split(':').map(Number);

            // Sumar o restar las horas y minutos según sea necesario
            totalHours += hours;
            totalMinutes += minutes;

            // Ajustar las horas y minutos
            if (totalMinutes >= 60 || totalMinutes <= -60) {
                totalHours += Math.floor(totalMinutes / 60);
                totalMinutes %= 60;
            }
        }

        // Mostrar el resultado
        result.textContent = totalHours + ':' + (totalMinutes < 10 ? '0' : '') + totalMinutes;
    } catch (error) {
        result.textContent = 'Error';
    }
}
function calculateMultiplicacion() {
    try {
        // Obtener las horas y minutos ingresados
        const [hours, minutes] = inputMultiplicacion.value.split(':').map(Number);
        
        // Obtener la tasa de moneda ingresada
        const tasaMoneda = parseFloat(tasaMonedaInput.value);
        
        // Calcular el total en minutos
        const totalMinutes = hours * 60 + minutes;
        
        // Calcular el total multiplicando por la tasa de moneda
        const totalMultiplicacion = totalMinutes * tasaMoneda / 60;
        
        // Formatear el resultado con puntuación
        const formattedResult = '$' + totalMultiplicacion.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
        // Mostrar el resultado formateado
        resultMultiplicacion.textContent = formattedResult;
    } catch (error) {
        resultMultiplicacion.textContent = 'Error';
    }
}