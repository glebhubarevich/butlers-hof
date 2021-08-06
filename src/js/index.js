'use strict';

//
//Imports
//
import {header} from './header.js';
import {slider} from './slider.js';
import {map} from './map.js';
import $ from './jquery-3.6.0.min.js';
window.$ = window.jQuery = $;

$(document).ready(function () {
	//Closing/Opening modal
	$('.modal__close-btn, .modal__overlay').on('click', () => {
		$('.modal').fadeOut();
		$('body').css('overflowY', 'scroll');
	});
	$('.book-btn').on('click', () => {
		$('.modal').fadeIn();
		$('body').css('overflowY', 'hidden');
	});

	//Toggle nav menu:
	$('.navigation__button').on('click', () => {
		//
		if ($('.contact__map').css('display') === 'block') {
			$('.contact__map').fadeOut();
		}
		//
		//
		else if ($('.contact__map').css('display') === 'none') {
			$('.contact__map').fadeIn();
		}

		if ($('.navigation__content').hasClass('navigation-active') === true) {
			$('.navigation').fadeOut();
			$('body').css('overflowY', 'scroll');
		}
		//
		else if ($('.navigation__content').hasClass('navigation-active') === false) {
			$('.navigation').fadeIn();
			$('body').css('overflowY', 'hidden');
		}

		$('.navigation__content').toggleClass('navigation-active');
		$('.navigation__button>span').toggleClass('nav-btn-active');
	});
});
