
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }
});


const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        themeIcon.src = '/img/sol.png';
        themeIcon.alt = 'Modo claro';
    } else {
        themeIcon.src = '/img/lua.png';
        themeIcon.alt = 'Modo escuro';
    }

    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});


window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
        body.classList.add('dark-mode');
        themeIcon.src = '/img/sol.png';
    }
});