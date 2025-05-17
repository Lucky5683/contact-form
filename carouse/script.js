const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showImage() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Auto-slide every 3 seconds
setInterval(nextImage, 3000);
