const empleados = [
    { id: 1, nombre: 'Sergio Cabrera', edad: 33, departamento: 'Ing.Software', salario: 90000, especializacion: 'Python' },
    { id: 2, nombre: 'Javier Pontis', edad: 34, departamento: 'Desarrollo de proveedores', salario: 85000, especializacion: 'JavaScript' },
    { id: 3, nombre: 'Luis Sabaini', edad: 42, departamento: 'Compras', salario: 85000, especializacion: 'C#' },
];

function mostrarempleados() {
    const totaldeempleados = empleados.map((empleado, index) => `<p>${empleado.id}: ${empleado.nombre}: - ${empleado.departamento} - $${empleado.salario}</p>`).join('');
    document.getElementById('informaciondeempleados').innerHTML = totaldeempleados;
}

function calcularsalariototal() {
    const salariototal = empleados.reduce((acc, empleados) => acc + empleados.salario, 0);
    alert(`Salario Total: ${salariototal}`);
}

function mostrarempleadosderh() {
    const empleadosrh = empleados.filter(empleado => empleado.departamento === 'Compras');
    const mostrarempleados = empleadosrh.map((empleados, index) => `<p>${empleados.id}: ${empleados.nombre} - ${empleados.departamento} - ${empleados.salario}</p>`).join('');
    document.getElementById('informaciondeempleados').innerHTML = mostrarempleados;

}

function encontrarempleadosconid(empleadosid) {
    const encontrarempleado = empleados.find(empleado => empleado.id === empleadosid);
    if (encontrarempleado) {
        document.getElementById('informaciondeempleados').innerHTML = `<p>${encontrarempleado.id}: ${encontrarempleado.nombre} - ${encontrarempleado.departamento} - ${encontrarempleado.salario}</p>`;     
    }
    else {
        document.getElementById('informaciondeempleados').innerHTML = 'No se ha encontrado un empleado con ese ID';
    }
}

function encontrarespecializacion() {
    const empleadosJavaScript = empleados.filter(empleado => empleado.especializacion === 'JavaScript');
    const mostrarDetallesEmpleadosJavaScript = empleadosJavaScript.map((empleados, index) => `<p>${empleados.id}: ${empleados.nombre} - ${empleados.departamento} - ${empleados.especializacion}</p>`).join('');
    document.getElementById('informaciondeempleados').innerHTML = mostrarDetallesEmpleadosJavaScript;
}

function encontrarespecializacion() {
    const empleadosJavaScript = empleados.filter(empleado => empleado.especializacion === 'JavaScript');
    const mostrarDetallesEmpleadosJavaScript = empleadosJavaScript.map((emplado, index) => `<p>${empleados.id}: `)
}


