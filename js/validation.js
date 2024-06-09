document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    // Limpiar mensajes de error anteriores
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (message) {
        message.textContent = "";
    });

    let isValid = true;

    // Validación de nombre
    if (nombre === "") {
        document.getElementById('nombreError').textContent = "Por favor, ingrese su nombre.";
        isValid = false;
    } else if (nombre.length < 2) {
        document.getElementById('nombreError').textContent = "El nombre debe tener al menos 2 caracteres.";
        isValid = false;
    } else if (/[^a-zA-Z\s]/.test(nombre)) {
        document.getElementById('nombreError').textContent = "El nombre solo debe contener letras y espacios.";
        isValid = false;
    }

    // Validación de email
    if (email === "") {
        document.getElementById('emailError').textContent = "Por favor, ingrese su email.";
        isValid = false;
    } else {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = "Por favor, ingrese un email válido.";
            isValid = false;
        }
    }

    // Validación de mensaje
    if (mensaje === "") {
        document.getElementById('mensajeError').textContent = "Por favor, ingrese su mensaje.";
        isValid = false;
    } else if (mensaje.length < 10) {
        document.getElementById('mensajeError').textContent = "El mensaje debe tener al menos 10 caracteres.";
        isValid = false;
    } else if (!mensaje.trim()) {
        document.getElementById('mensajeError').textContent = "El mensaje no puede contener solo espacios en blanco.";
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});
