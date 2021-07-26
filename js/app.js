const API_KEY = 'nvcLWn0SmKbzD11R7CfsDe7gXdAR5dPRHNagPZm3';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const titleElement = document.querySelector('[data-title]');
const imageElement = document.querySelector('[data-image]');
const explanationElement = document.querySelector('[data-explanation]');
const copyrightElement = document.querySelector('[data-copyright]');

function getData() {
	fetch(API_URL)
		.then(response => response.json())
		.then(data => {
			titleElement.innerHTML = data.title,
			imageElement.src = data.url,
			explanationElement.innerHTML = data.explanation,
			copyrightElement.innerHTML = data.copyright
		});
}

getData();