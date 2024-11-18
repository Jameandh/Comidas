document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && correo && mensaje) {
        alert('Formulario enviado con éxito');
        // Aquí podrías enviar los datos si tienes un servidor PHP
    } else {
        alert('Por favor, rellena todos los campos');
    }
});
