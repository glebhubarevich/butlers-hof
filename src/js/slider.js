'use strict';

const sliderContainer = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slider__slide');
const slide = document.querySelector('.slider__slide_img');

//Calculate how many slides fit on screen and get the max number of slider windows
const slideWidth = slide.offsetWidth + 30; //30px=margin/column-gap
const slidesOnScreen = Math.trunc(window.innerWidth / slideWidth);
const maxSlide = slides.length - slidesOnScreen;

let curSlide = 0;

const goToSlide = (s) => (sliderBody.style.transform = `translateX(${-s * slideWidth}px)`);

const prewSlide = () => {
	if (curSlide === 0) curSlide = maxSlide;
	else curSlide--;
	goToSlide(curSlide);
};
const nextSlide = () => {
	if (curSlide === maxSlide) curSlide = 0;
	else curSlide++;
	goToSlide(curSlide);
};

document.querySelector('.slider__btn-left').addEventListener('click', prewSlide);
document.querySelector('.slider__btn-right').addEventListener('click', nextSlide);
