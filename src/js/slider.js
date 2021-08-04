'use strict';

const sliderContainer = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slider__slide');
const slide = document.querySelector('.slider__slide_img');
const maxSlide = slides.length - 3;
// const slideWidth = window.innerWidth / 4 + 120;
const slideWidth = slide.offsetWidth;
let curSlide = 0;

function showSlide() {}
const goToSlide = (s) => {
	const x = -s * slideWidth;
	console.log(s, slideWidth, x);
	sliderBody.style.transform = `translateX(${x}px)`;
};

function prewSlide() {
	if (curSlide === 0) curSlide = maxSlide;
	else curSlide--;
	goToSlide(curSlide);
}
function nextSlide() {
	if (curSlide === maxSlide) curSlide = 0;
	else curSlide++;
	goToSlide(curSlide);
}

document.querySelector('.slider__btn-left').addEventListener('click', prewSlide);
document.querySelector('.slider__btn-right').addEventListener('click', nextSlide);
