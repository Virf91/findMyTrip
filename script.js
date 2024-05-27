document.addEventListener("DOMContentLoaded", function () {
const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

  if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          
          const nameInput = document.getElementById("name");
          const emailInput = document.getElementById("email");
          const messageInput = document.getElementById("message");

          const name = nameInput.value.trim();
          const email = emailInput.value.trim();
          const message = messageInput.value.trim();
          const nameRegex = /^[a-zA-Z\s]{3,}$/;

          
          if (!nameRegex.test(name)) {
              displayError("El nombre debe contener solo letras y tener al menos 3 caracteres.");
              return;
          }

          
          if (!isValidEmail(email)) {
              displayError("Por favor ingresa un correo electrónico válido.");
              return;
          }

          
          if (message === "") {
              displayError("Por favor ingresa un mensaje.");
              return;
          }

          
          displayFormData(name, email, message);
          contactForm.reset();
      });
  }

  
  function isValidEmail(email) {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }


  function displayError(message) {
    
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = message;

      
      formResult.innerHTML = "";
      formResult.appendChild(errorParagraph);
  }


  function displayFormData(name, email, message) {

      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = `Gracias por tu mensaje, ${name}.`;

      const emailParagraph = document.createElement("p");
      emailParagraph.textContent = `Nos pondremos en contacto contigo a ${email} pronto.`;

      const messageParagraph = document.createElement("p");
      messageParagraph.textContent = "Tu mensaje:";

      const messageText = document.createElement("p");
      messageText.textContent = message;


      formResult.innerHTML = "";
      formResult.appendChild(nameParagraph);
      formResult.appendChild(emailParagraph);
      formResult.appendChild(messageParagraph);
      formResult.appendChild(messageText);
  }
//----------------------------------------------------------------------------------------
// Carrusel 
let currentIndex = 0;
  const carouselItems = document.querySelectorAll(".carousel-item");

  function showSlide(index) {
    if (index >= carouselItems.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = carouselItems.length - 1;
    } else {
      currentIndex = index;
    }
    carouselItems.forEach((item, idx) => {
      item.classList.toggle("active", idx === currentIndex);
    });
  }

  function next() {
    showSlide(currentIndex + 1);
  }

  function prev() {
    showSlide(currentIndex - 1);
  }

  document.querySelector(".next").addEventListener("click", next);
  document.querySelector(".prev").addEventListener("click", prev);
  showSlide(currentIndex);



});





/*document.addEventListener("DOMContentLoaded", function () {
  // Formulario de contacto
  const contactForm = document.getElementById("contactForm");
  const formResult = document.getElementById("formResult");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Obtener valores de entrada
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      // Expresiones regulares para validación
      const nameRegex = /^[a-zA-Z\s]{3,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validación de nombre
      if (!nameRegex.test(name)) {
        formResult.innerHTML = "<p>El nombre debe contener solo letras y tener al menos 3 caracteres.</p>";
        return;
      }

      // Validación de correo electrónico
      if (!emailRegex.test(email)) {
        formResult.innerHTML = "<p>Por favor ingrese un correo electrónico válido.</p>";
        return;
      }

      // Validación de mensaje
      if (message.length < 1) {
        formResult.innerHTML = "<p>Por favor ingrese un mensaje.</p>";
        return;
      }

      // Si todas las validaciones pasan
      const messageHtml = `
        <p>Gracias por tu mensaje, ${name}.</p>
        <p>Nos pondremos en contacto contigo a ${email} pronto.</p>
        <p>Tu mensaje:</p>
        <p>${message}</p>
      `;
      formResult.innerHTML = messageHtml;
      contactForm.reset();
    });
  }

  // Carrusel
  let currentIndex = 0;
  const carouselItems = document.querySelectorAll(".carousel-item");

  function showSlide(index) {
    if (index >= carouselItems.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = carouselItems.length - 1;
    } else {
      currentIndex = index;
    }
    carouselItems.forEach((item, idx) => {
      item.classList.toggle("active", idx === currentIndex);
    });
  }

  function next() {
    showSlide(currentIndex + 1);
  }

  function prev() {
    showSlide(currentIndex - 1);
  }

  document.querySelector(".next").addEventListener("click", next);
  document.querySelector(".prev").addEventListener("click", prev);
  showSlide(currentIndex);
});
*/
