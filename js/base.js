const prev = document.querySelector('#btn-left');
const next = document.querySelector('#btn-right');
const splash = document.querySelector('.splash');
const articles = document.querySelectorAll('.article');

let slideshowPosition = 0;

const images = [
    './images/desktop-image-hero-1.jpg',
    './images/desktop-image-hero-2.jpg',
    './images/desktop-image-hero-3.jpg',
];

const switchArticle = () => {
    articles.forEach((article) => article.classList.add('hidden'));
    articles[slideshowPosition].classList.remove('hidden');
};

prev.addEventListener('click', () => {
    if (slideshowPosition == 0) {
        slideshowPosition = images.length - 1;
    } else {
        slideshowPosition -= 1;
    }
    splash.style.backgroundImage = `url(${images[slideshowPosition]})`;
    switchArticle();
});

next.addEventListener('click', () => {
    if (slideshowPosition >= images.length - 1) {
        slideshowPosition = 0;
    } else {
        slideshowPosition += 1;
    }
    splash.style.backgroundImage = `url(${images[slideshowPosition]})`;
    switchArticle();
});