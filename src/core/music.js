import querystring from 'query-string';

import {
  musicGraphAPI,
} from '../config';

export async function getInfo(artist) {

  let url = `http://api.musicgraph.com/api/v2/artist/search?`;

  let query = querystring.stringify({
    api_key: musicGraphAPI,
    name: artist,
  });

  console.log(url + query);

  return fetch(url + query, {
    method: 'GET',
  })
  .then((response) => {
    response = JSON.parse(response._bodyText);

    console.log(response);
    
  })
  .catch((err) => {
    return new Promise.reject(err);
  });
}
