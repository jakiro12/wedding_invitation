document.addEventListener('DOMContentLoaded', function () {
    const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Reemplaza con las rutas de tus imágenes
    const interval = 3000; // Cambiar de imagen cada 5 segundos (5000 milisegundos)
  
    let currentIndex = 0;
    const backgroundAnimation = document.querySelector('.background-animation');
  
    function changeBackground() {
      backgroundAnimation.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    setInterval(changeBackground, interval);
  });
  