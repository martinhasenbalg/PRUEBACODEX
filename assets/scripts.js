const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId.length > 1) {
            event.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (event) => {
        const emailInput = form.querySelector('input[type="email"]');
        const messageInput = form.querySelector('textarea');

        if (!emailInput.validity.valid) {
            event.preventDefault();
            emailInput.focus();
        } else if (messageInput.value.trim().length < 10) {
            event.preventDefault();
            alert('Por favor, cuéntanos un poco más sobre tu proyecto (mínimo 10 caracteres).');
            messageInput.focus();
        }
    });
}
