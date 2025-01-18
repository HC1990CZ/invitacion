// Configuración para confeti instantáneo
const count = 200;
const defaults = {
    origin: { y: 0.7 }
};

function fireConfetti(particleRatio, opts) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
}

// Lanzar confeti al cargar la página
window.onload = function() {
    fireConfetti(0.25, { spread: 26, startVelocity: 55 });
    fireConfetti(0.2, { spread: 60 });
    fireConfetti(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fireConfetti(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fireConfetti(0.1, { spread: 120, startVelocity: 45 });

    startLongConfetti();
};

// Función para animación prolongada de confeti
function startLongConfetti() {
    const duration = 15 * 1000; // 15 segundos
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}

// Activar confeti al presionar el botón
document.getElementById('confetti-button').addEventListener('click', () => {
    fireConfetti(0.25, { spread: 26, startVelocity: 55 });
    fireConfetti(0.2, { spread: 60 });
    fireConfetti(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fireConfetti(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fireConfetti(0.1, { spread: 120, startVelocity: 45 });
});
