'use strict';
import giphy from './giphy';

import '../styles/index.scss';

const form = document.querySelector('.search');
const searchField = document.querySelector('.search__field');
const notFound = document.querySelector('.not-found');

const gallery = document.querySelector('.gallery');

const createGif = (json) => {
  json.data.map(gif => {
    gallery.innerHTML += `
      <a href="${gif.url}" class="gallery__item">
        <img src="${gif.images.downsized.url}">
      </a>
    `;
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();

  gallery.innerHTML = '';
  notFound.textContent = '';

  giphy
    .search(searchField.value)
    .then(response => {
      if (response.data.length === 0) {
        notFound.classList.add('not-found--active');
        notFound.textContent = `We couldn't find any GIFs with the search query "${searchField.value}".`;
      } else {
        createGif(response);
      }
    });
  notFound.classList.remove('not-found--active');
});
