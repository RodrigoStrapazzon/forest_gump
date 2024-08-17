// src/slideshow.js

let slideIndex = 0;
let slideInterval;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Oculta todas as imagens
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "active" de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    // Exibe a imagem atual
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Define o tempo para trocar de slide
    slideInterval = setTimeout(showSlides, 5000); // Muda de imagem a cada 5 segundos
}

function plusSlides(n) {
    clearTimeout(slideInterval);
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    clearTimeout(slideInterval);
    slideIndex = n - 1;
    showSlides();
}

// Inicializa o slideshow
showSlides();
