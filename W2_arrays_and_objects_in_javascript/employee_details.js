const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'Reac' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Java' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Python'},
    { id: 4, name: 'Sergio Cabrera', age: 33, department: 'IT', salary: 95000, specialization:'JavaScript' },
    //... Más registros de empleados pueden ser añadidos aquí
];

function displayAllEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    // Convertir el ID del empleado a un número
    const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
      } 
}

function mostrarDetallesEmpleadosJavaScript() {
    // Filtrar empleados que tienen especialización en JavaScript
    const empleadosJavaScript = employees.filter(employee => employee.specialization === "JavaScript");

    // Verificar si se encontraron empleados con especialización en JavaScript
    if (empleadosJavaScript.length > 0) {
        // Crear una cadena HTML para mostrar los detalles de los empleados encontrados
        const detallesHTML = empleadosJavaScript.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');

        // Mostrar los detalles de los empleados en el elemento HTML con el ID 'empleadosDetalles'
        document.getElementById('employeesDetails').innerHTML = detallesHTML;
    } else {
        // Mostrar un mensaje si no se encontraron empleados con especialización en JavaScript
        document.getElementById('employeesDetails').innerHTML = 'No se encontraron empleados con especialización en JavaScript.';
    }
}


