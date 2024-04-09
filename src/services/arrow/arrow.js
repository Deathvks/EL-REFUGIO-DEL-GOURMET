// Función para desplazarse hacia el inicio del documento
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Opcional: desplazamiento suave
    });
}

// Mostrar u ocultar la flecha según el desplazamiento
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const threshold = 200; // Puedes ajustar este valor según tus necesidades
    const arrowIcon = document.querySelector('.arrow-icon');
    arrowIcon.style.display = scrollY > threshold ? 'block' : 'none';
});

scrollToTop();