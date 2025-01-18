window.addEventListener("scroll", () => {
    const video = document.getElementById("bg-video");
    const scrollPosition = window.scrollY;

    // Ajusta la posición del video según el desplazamiento
    video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
