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
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const carouselItems = document.getElementsByClassName("carousel-item");
    
    function next() {
      currentIndex++;
      if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
      }
      updateCarousel();
    }
    
    function prev() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
      }
      updateCarousel();
    }
    
    function updateCarousel() {
      for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove("active");
      }
      carouselItems[currentIndex].classList.add("active");
    }
    window.addEventListener("load", function() {
      const carousel = document.querySelector(".carousel");
      carousel.addEventListener("slid.bs.carousel", function() {
        currentIndex = Array.from(carouselItems).indexOf(document.querySelector(".active"));
      });
    });
    
    window.addEventListener("load", function() {
      document.addEventListener("click", function(e) {
        if (e.target.matches(".next")) {
          next();
        }
        if (e.target.matches(".prev")) {
          prev();
        }
      });
    });
})
