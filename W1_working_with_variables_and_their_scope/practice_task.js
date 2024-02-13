{
    let variableLet = "Hola";
    const variableConst = "Mundo";
    var variableVar = "!";
    
    console.log(variableLet); // Output: Hola
    console.log(variableConst); // Output: Mundo
    console.log(variableVar); // Output: !
    
    // Intento de reasignar las variables dentro del bloque
    variableLet = "Adiós"; // Permitido
    // variableConst = "Planeta"; // Error: No se puede reasignar una constante
    variableVar = "?"; // Permitido
}

console.log(variableLet); // Output: Error: variableLet is not defined
console.log(variableConst); // Output: Error: variableConst is not defined
console.log(variableVar); // Output: ?

// Intento de reasignar las variables fuera del bloque
// variableLet = "Adiós"; // Error: variableLet is not defined
// variableConst = "Planeta"; // Error: variableConst is not defined
variableVar = "?"; // Permitido