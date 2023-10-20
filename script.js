document.addEventListener('DOMContentLoaded', function() {
    const logregBox = document.querySelector('.logreg-box');
    const loginLink = document.querySelector('.loglink');
    const regLink = document.querySelector('.reglink');

    regLink.addEventListener('click', () => {
        logregBox.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        logregBox.classList.remove('active');
    });
});
