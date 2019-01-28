'use strict';

import '../styles/index.scss';
import giphy from './giphy';

const searchButton = document.querySelector('.search__button');

const gallery = document.querySelector('.gallery');

const createGif = (json) => {
  json.data.map(gif => {
    gallery.innerHTML += `
      <a class="gallery__item">
        <img src="${gif.images.downsized.url}">
      </a>
    `;
  });
};

searchButton.addEventListener('click', event => {
  event.preventDefault();

  const searchField = document.querySelector('.search__field');
  const notFound = document.querySelector('.not-found');

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
