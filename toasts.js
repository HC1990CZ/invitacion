const messages = [
    "Hola :)",
    "Quiero contarte que. . .",
    "Mi cumpleaños va a ser muy pronto",
    "Y quiero invitarte a mi fiesta",
"Voy a cumplir mi 1er año",
    "Espero que puedas acompañarnos"
];

const container = document.getElementById("toast-container");
const sound = document.getElementById("notification-sound");
const notificationButton = document.getElementById("notification-button");

let delay = 0;

// Función para mostrar los mensajes y reproducir sonido
function showMessages() {
    notificationButton.style.display = "none"; // Oculta el botón al hacer clic

    messages.forEach((message, index) => {
        setTimeout(() => {
            const toast = document.createElement("div");
            toast.classList.add("toast");
            toast.innerText = message;
            container.prepend(toast);

            // Reproducir sonido
            sound.currentTime = 0; // Reinicia el sonido
            sound.play();

            // Mostrar el toast
            setTimeout(() => {
                toast.classList.add("show");
            }, 100);

            // Eliminar después de cierto tiempo
            setTimeout(() => {
                toast.classList.remove("show");
                setTimeout(() => {
                    toast.remove();
                }, 500);
            }, 5000);
        }, delay);

        delay += 1500; // 3.5 segundos entre toasts
    });
}

// Evento para el clic en el botón
notificationButton.addEventListener("click", showMessages);
