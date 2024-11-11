let currentSlide = 0;
const slides = document.querySelectorAll(".carousel .slide");
let interval;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // Actualiza la posición del slide
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-slides"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Iniciar el desplazamiento automático
function startCarousel() {
  interval = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
}

// Detener el desplazamiento automático
function stopCarousel() {
  clearInterval(interval);
}

// Configurar eventos para detener y reanudar el carrusel
const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseover", stopCarousel);
carousel.addEventListener("mouseout", startCarousel);

// Iniciar el carrusel al cargar la página
startCarousel();
