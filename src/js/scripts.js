document.addEventListener('DOMContentLoaded', () => {
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const card = document.querySelector('.card');
    const body = document.body;

    function handleCardFlip() {
        body.classList.add('no-scroll');
        setTimeout(() => {
            body.classList.remove('no-scroll');
        }, 600);
    }

    switchToRegister.addEventListener('click', () => {
        card.classList.add('flip');
        handleCardFlip();
    });

    switchToLogin.addEventListener('click', () => {
        card.classList.remove('flip');
        handleCardFlip();
    });
});
