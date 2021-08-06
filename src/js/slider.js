'use strict';

const sliderContainer = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slider__slide');
const slide = document.querySelector('.slider__slide_img');
let curSlide = 0;

////////////
////////////

const getColumnGap = () =>
	parseFloat(window.getComputedStyle(sliderBody, null).getPropertyValue('column-gap'));

const getSlideWidth = () => slide.offsetWidth + getColumnGap();

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
