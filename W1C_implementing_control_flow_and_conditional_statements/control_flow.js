let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

// Si userRole es "admin", el código asignará accessLevel como "Acceso completo concedido".
// Si no, procederá a comprobar si userRole es "manager".
// Si userRole es "manager", asignará accessLevel como "Acceso limitado concedido".
// Si userRole no es ni "admin" ni "manager", el código asignará a accessLevel el valor "No access granted".

// You will be able to see the output using this code:
// console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

// Si el usuario ha iniciado sesión isLoggedIn === true, el código comprueba el rol del usuario (userRole).
// 1. Si userRole es "admin", establece userMessage como "¡Bienvenido, Admin!".
// 2. Si userRole no es "admin", establece userMessage como "¡Bienvenido, usuario!".
// 3. Si el usuario no ha iniciado sesión isLoggedIn === false, entonces:
//      El mensaje se establece a "Por favor, inicie sesión para acceder al sistema".

// You can use the following console method to view the output:
// console.log("User Message:", userMessage);

let userType ="suscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "suscriber":
        userCategory = "Suscriber";
        break;
    default:
        userCategory = "Unknown";
}  

// Se declara una variable userType y se le asigna el valor "suscriber".
//Se declara una variable userCategory sin asignarle ningún valor inicial.
//Se utiliza una estructura de control switch para evaluar el valor de la variable userType y asignar un valor a la variable userCategory en función de ese valor.
//Dentro del switch, se definen varios casos (case) que representan posibles valores de userType.
//Si userType es "admin", se asigna el valor "Administrator" a userCategory.
//Si userType es "manager", se asigna el valor "Manager" a userCategory.
//Si userType es "suscriber", se asigna el valor "Suscriber" a userCategory.
//Si userType no coincide con ninguno de los casos definidos (por ejemplo, si es otro valor que no sea "admin", "manager" o "suscriber"), se ejecuta el bloque default, donde se asigna el valor "Unknown" a userCategory.
//Después de ejecutar el switch, userCategory contendrá el valor correspondiente según el valor de userType.


//En resumen, este código utiliza un switch para asignar una categoría específica a un usuario basándose en su tipo (userType). 
//Dependiendo del valor de userType, se asigna una categoría específica a userCategory. 
//Si el valor de userType no coincide con ningún caso definido, se asigna la categoría "Unknown".

// You can use the following console method to view the output:
// console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// 1. Se declara una variable isAuthenticated y se le asigna el valor true. 
//    Esta variable representa el estado de autenticación del usuario, donde true significa que el usuario está autenticado y false significa que no lo está.
// 2. Se utiliza el operador condicional ternario ? : para asignar un valor a la variable authenticationStatus en función del valor de isAuthenticated.
// 3. La expresión isAuthenticated ? "Authenticated" : "Not authenticated" significa lo siguiente:
//     Si isAuthenticated es verdadero (true), la expresión devuelve "Authenticated".
//     Si isAuthenticated es falso (false), la expresión devuelve "Not authenticated".
//Por lo tanto, la variable authenticationStatus contendrá "Authenticated" si isAuthenticated es verdadero, o "Not authenticated" si isAuthenticated es falso.

//En resumen, este código utiliza el operador condicional ternario para determinar el estado de autenticación del usuario y asignar un mensaje correspondiente a la variable authenticationStatus. 
//Dependiendo del valor de isAuthenticated, authenticationStatus contendrá uno de los dos mensajes posibles: "Authenticated" si el usuario está autenticado o "Not authenticated" si el usuario no está autenticado.