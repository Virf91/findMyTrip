document.addEventListener("DOMContentLoaded", function () {
  // Formulario de contacto
  const contactForm = document.getElementById("contactForm");
  const formResult = document.getElementById("formResult");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const name = nameInput.value.trim();
      const nameRegex = /^[a-zA-Z\s]{3,}$/;

      if (!nameRegex.test(name)) {
        formResult.innerHTML =
          "<p>El nombre debe contener solo letras y tener al menos 3 caracteres.</p>";
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
        formResult.innerHTML = "<p>Por favor completa todos los campos.</p>";
      }
    });
  }

  // Carruse
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
