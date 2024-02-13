// Definir el rol de la persona
let role = "Empleado"; // Puedes cambiar el rol aquí para probar diferentes casos

// Verificar el rol y proporcionar acceso a los servicios correspondientes
switch (role) {
    case "Empleado":
        console.log("Usted es un empleado. Tiene acceso a los Servicios Dietéticos.");
        break;
    case "Miembro Inscrito":
        console.log("Usted es un miembro inscrito. Tiene acceso a los Servicios Dietéticos y a la interacción individual con un dietista.");
        break;
    case "Suscriptor":
        console.log("Usted es un suscriptor. Tiene acceso parcial para facilitar los Servicios Dietéticos.");
        break;
    default:
        console.log("Usted no es un suscriptor. Por favor, inscríbase o suscríbase primero para acceder a esta facilidad.");
}
