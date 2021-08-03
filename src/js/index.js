'use strict';

//
//Imports
//
import {async} from 'regenerator-runtime';
//import {header} from './header.js';

//
//Variables
//
const floatingHeader = document.querySelector('.header');
const heroHeader = document.querySelector('.hero__header');

//
//Functions
//

//Toggling secondary header when primary is out of viewport
/***************/
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
/***************/

//
//Event Listeners
//

headerObserver.observe(heroHeader);