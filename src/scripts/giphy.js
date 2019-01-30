'use strict';

import queryString from 'query-string';

function search (searchQuery) {
  const query = {
    api_key: process.env.GIPHY_API_KEY,
    q: searchQuery,
    limit: 5
  };

  return fetch(`https://api.giphy.com/v1/gifs/search?${queryString.stringify(query)}`)
    .then(response => response.json());
}

export default { search };
