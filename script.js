const btnOpen = document.querySelector('[data-btn-open]');
const btnClose = document.querySelector('[data-btn-close]');
const navDiv = document.querySelectorAll('[data-nav-div]');
const overlay = document.querySelector('.overlay');

btnOpen.addEventListener('click', () => {
    navDiv.forEach((navDivEl) => navDivEl.classList.add('visible'));
    overlay.classList.add('open');
});

btnClose.addEventListener('click', () => {
    navDiv.forEach((navDivEl) => navDivEl.classList.remove('visible'));
    overlay.classList.remove('open');
});
