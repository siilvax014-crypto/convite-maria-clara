document.addEventListener('DOMContentLoaded', () => {
    // Definir a data do evento
    const eventDate = new Date('December 6, 2025 19:00:00').getTime();

    // Atualizar o contador a cada segundo
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Se a data já passou
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<p>O grande dia chegou!</p>";
            return;
        }

        // Cálculos de tempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualizar o HTML
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }, 1000);

    // Definir o ano atual no rodapé
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').innerText = currentYear;
});