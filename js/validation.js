document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }

    if (email === "") {
        alert("Por favor, ingrese su email.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return;
    }

    if (mensaje === "") {
        alert("Por favor, ingrese su mensaje.");
        return;
    }
    this.submit();
});
