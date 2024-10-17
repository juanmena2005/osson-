const hamburgerMenu = document.querySelector('#hamburger-menu');
const navMenu = document.querySelector('#nav-menu');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

let slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // exit if no slides found
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}

let currentIndex = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  currentIndex = index;
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
  currentIndex++;
  if (currentIndex >= document.querySelectorAll('.slide').length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = document.querySelectorAll('.slide').length - 1;
  }
  showSlide(currentIndex);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentIndex);

// Controladores de eventos para flechas de navegación
document.getElementById('prevButton').addEventListener('click', prevSlide);
document.getElementById('nextButton').addEventListener('click', nextSlide);