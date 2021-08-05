'use strict';

const map = L.map('mapid').setView([50.31668, 11.91437], 18);
const icon = L.icon({
	iconUrl: 'https://svgshare.com/i/ZsH.svg',
	iconSize: [55, 70],
	iconAnchor: [30, 80],
});
L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
L.marker([50.31668, 11.91437], {icon: icon}).addTo(map);
