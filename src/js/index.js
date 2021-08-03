'use strict';

//
//Imports
//
import {async} from 'regenerator-runtime';
import {header} from './header.js';

//
//Variables
//
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');
//
//Functions
//
const closeModal = () => {
	modal.classList.add('modal-hidden');
	setTimeout(() => {
		modal.style.visibility = 'none';
	});
};
//
//Event Listeners
//
modalCloseBtn.addEventListener('click', closeModal);
