let rightSlider = document.querySelector('.right .slider');
let leftSlider = document.querySelector('.left .slider');
let upBtn = document.querySelector('.btn:first-child');
let downBtn = document.querySelector('.btn:last-child');
let slidesLength = document.querySelectorAll('.slide').length - 1;

let controlar = slidesLength;

rightSlider.style.transform = `translateY(-${controlar * 100}%)`;
leftSlider.style.transform = `translateY(-${0}%)`;

function scrollUp() {
    controlar--;
    if (controlar < 0) {
        controlar = slidesLength;
    }
    scroll();
}

function scrollDown() {
    controlar++;
    if (controlar > slidesLength) {
        controlar = 0;
    }
    scroll();
}

function scroll() {
    rightSlider.style.transform = `translateY(-${controlar * 100}%)`;
    leftSlider.style.transform = `translateY(-${(slidesLength - controlar) * 100}%)`;
}

upBtn.addEventListener("click", scrollUp);
downBtn.addEventListener("click", scrollDown);