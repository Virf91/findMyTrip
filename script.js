document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formResult = document.getElementById('formResult');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación de datos
        const name = nameInput.value.trim(); 

        const nameRegex = /^[a-zA-Z]{3,}$/;

        if (!nameRegex.test(name)) {
            formResult.innerHTML = '<p>El nombre debe contener solo letras y tener al menos 3 caracteres.</p>';
            return; 
        }
        if (name && email && message) {
            const messageHtml = `
                <p>Gracias por tu mensaje, ${name}.</p>
                <p>Nos pondremos en contacto contigo a ${email} pronto.</p>
                <p>Tu mensaje:</p>
                <p>${message}</p>
            `;
            formResult.innerHTML = messageHtml;
            contactForm.reset();
        } else {
            formResult.innerHTML = '<p>Por favor completa todos los campos.</p>';
        }
    });
})
