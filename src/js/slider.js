'use strict';

const sliderContainer = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slider__slide');
const slide = document.querySelector('.slider__slide_img');
let curSlide = 0;

// //Calculate how many slides fit on screen and get the max number of slider windows
// const slideWidth = slide.offsetWidth + 30; //30px=margin/column-gap
// const slidesOnScreen = Math.trunc(window.innerWidth / slideWidth);
// let maxSlide = slides.length - slidesOnScreen;

const getSlideWidth = () => slide.offsetWidth + 30; //30px = left margin/column-gap
const getMaxSlide = () => {
	const slidesOnScreen = Math.trunc(window.innerWidth / getSlideWidth());
	return slides.length - slidesOnScreen;
};

const goToSlide = (s) => (sliderBody.style.transform = `translateX(${-s * getSlideWidth()}px)`);

const prewSlide = () => {
	if (curSlide === 0) curSlide = getMaxSlide();
	else curSlide--;
	goToSlide(curSlide);
};
const nextSlide = () => {
	if (curSlide === getMaxSlide()) curSlide = 0;
	else curSlide++;
	goToSlide(curSlide);
};

document.querySelector('.slider__btn-left').addEventListener('click', prewSlide);
document.querySelector('.slider__btn-right').addEventListener('click', nextSlide);
