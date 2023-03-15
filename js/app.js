const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', function() {
    document.querySelector('.header-bottom').classList.toggle('open');
});

const colors = [
    '#0aa834',
    '#0a98a8',
    '#4f0aa8',
    '#e8ac15',
]

document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        card.style.backgroundColor = color;
    });
})