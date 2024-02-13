let count = 0; // Este código establece una variable count y la inicializa a 0, sirviendo como punto de partida para el recuento de seguidores.

function increaseCount() {
    count++; // Incrementa the count by 1
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // muestra el recuento en el html
}

function increaseCount() {
    count++; // Icrementa el contador en 1
    displayCount(); //muestra el contador
    checkCountValue(); // comprobacion del valor del recuento y visualizacion de mensajes 
}

function checkCountValue() {
    if (count === 10) {
        alert("Your instagram post gained 10 followers! Congratulations!")
    } else if (count === 20) {
        alert("Your instagram post gained 20 followers! Keep it up")
    }
}

function resetCount() {
    count = 0; // restablece el contador a 0
    displayCount(); //Muestra el contador restablecido en el html
    alert("El conteo de seguidores ha sido restablecido.");
}
