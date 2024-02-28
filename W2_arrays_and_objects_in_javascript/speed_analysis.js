//! PASO 2 Defining variables and functions

let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // ? Set the test text
    document.getElementById("inputText").value = testText;
    
    // ? Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    
    // ? Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    //! DESACTIVAR LA ENTRADA DEL USUARIO
    document.getElementById("userInput").readOnly = true;

    //! CALCULAR EL TIEMPO TRANSCURRIDO Y LAS PALABRAS POR MINUTO (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    //! DIVISION DEL TEXTO UTILIZANDO regex PARA CONTAR LAS PALABRAS CORRECTAMENTE
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    var totalCharacters = userTypedText.length;

    //! VISUALIZACION DE LOS RESULTADOS
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Total Lenght: " + totalCharacters + "</p>"+
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    //! REINICIO DEL BOTON 
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}


