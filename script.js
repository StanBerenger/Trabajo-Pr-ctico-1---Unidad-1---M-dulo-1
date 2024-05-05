document.addEventListener('DOMContentLoaded', function() {
    
//-------------Logica para manejar la visibilidad de los contenedores----------------

let tituloConsultar = document.querySelector('.tituloConsultar');
let formulario = document.querySelector('.formulario');
let btnEnviarForm = document.querySelector('.enviando');
let btnPlanesContainer = document.querySelector('.contenedorBotones');
let btnInstitucional = document.querySelector('#institucional');
let seccionInstitucional = document.querySelector('#section-institucional');


let contenedorPrecio = document.querySelector('#contenedorPrecio');


// Objeto que mapea los nombres de los planes a sus precios
const preciosMap = {
    'basico': '$500',
    'intermedio': '$1000',
    'premium': '$1500'
};

//Funcion para cambiar el estado del form y contenedor de botones **DE 10:)
formulario.addEventListener('submit', enviarForm);
function enviarForm(event) {
    event.preventDefault();
    mostrarPlanes();

    localStorage.setItem('currentState', 'enviaForm');
}

//Fcion. para manejar el estado botones de planes y guardarlo en localStorage  **DE 10:)
function mostrarPlanes() {
    formulario.classList.add('d-none');
    btnPlanesContainer.classList.remove('d-none');

    localStorage.setItem('currentState', 'planesVisibles');
}

//Identificar por medio del ID de cada boton para saber donde se hace clic
btnPlanesContainer.addEventListener('click', function(event) {
    tituloConsultar.textContent = 'Su plan';

    if (event.target.tagName === 'BUTTON') {
        let planSeleccionado = event.target.id;
        console.log('El botón seleccionado es:', planSeleccionado);

        let precioSeleccionado = preciosMap[planSeleccionado];

        console.log('El precio del plan seleccionado es:', precioSeleccionado);

        // Guardar el estado y el precio seleccionado en localStorage
        localStorage.setItem('currentState', 'textoVisible');
        localStorage.setItem('precioSeleccionado', precioSeleccionado);

        // Mostrar el precio seleccionado
        contenedorPrecio.textContent = precioSeleccionado;
        contenedorPrecio.style.fontSize = '4rem'; //cambiando el estilo
        contenedorPrecio.classList.remove('d-none');

        // Ocultar el contenedor de botones luego de seleccionar un plan
        btnPlanesContainer.classList.add('d-none');
    }
});

//boton institucional
btnInstitucional.addEventListener('click', mostrarSeccion);
function mostrarSeccion() {
    seccionInstitucional.classList.remove('d-none');
}

// Verificar el estado al cargar
function verificarEstado() {
    const currentState = localStorage.getItem('currentState');
    if (currentState === 'textoVisible') {
        // Restablecer el formulario y ocultar el precio
        formulario.classList.remove('d-none');
        btnPlanesContainer.classList.add('d-none');
        contenedorPrecio.classList.add('d-none');
    }
}

// Llamar a la función para verificar el estado al cargar la página
verificarEstado();



// Logica para validar el formulario desde el lado del cliente
//Ejemplo de JavaScript inicial para deshabilitar el envio de formularios si hay campos no validos
//Plataforma de Bootstrap*/
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

});
    











