window.onload = function () {
    const overlay = document.getElementById('overlay');
    const contenido = document.getElementById('contenido');
    const video = document.getElementById('animacion-sobre');

    // Duración de la animación en milisegundos (13 segundos)
    const duracionAnimacion = 13000;

    // Reproducir el video automáticamente
    video.play();

    // Ocultar el overlay y mostrar el contenido después de la animación
    setTimeout(() => {
        overlay.style.display = 'none';
        contenido.style.display = 'block';
        document.body.style.overflow = 'auto'; // Permite el scroll si es necesario
    }, duracionAnimacion);
};
