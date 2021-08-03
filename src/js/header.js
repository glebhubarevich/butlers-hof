'use strict';

const floatingHeader = document.querySelector('.header');
const heroHeader = document.querySelector('.hero__header');

function toggleHeader(entries) {
	if (!entries[0].isIntersecting) {
		floatingHeader.classList.add('header-active');
	}
	if (entries[0].isIntersecting) {
		floatingHeader.classList.remove('header-active');
	}
}
const headerObserver = new IntersectionObserver(toggleHeader, {
	root: null,
	threshold: 0,
});

headerObserver.observe(heroHeader);
