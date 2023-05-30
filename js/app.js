// Variables 

const formulario = document.querySelector('#agregar-gasto'); //id el formulario
const gastoListado = document.querySelector('#gastos ul'); //






// Eventos 
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto); //Cargar el docmento listo y pasar la funcion del promt 

}






// Classes









// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto');

    console.log( Number (presupuestoUsuario));

    // vacío si da en aceptar y no da ningún valor
    // Si da en cancelar el valor es null
    //isNaN es una funcion ya escrita, si trata de conventirlo a número y es true
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload(); // Evento que recarga la ventana actual

    }
}