'use strict';

//
//Imports
//
// import {async} from 'regenerator-runtime';
import {header} from './header.js';
import {slider} from './slider.js';
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
});
