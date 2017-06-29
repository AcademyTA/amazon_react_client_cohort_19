const BASE_URL = 'http://localhost:3000/api/v1/products/';
const API_KEY = '74ce56bc08e7663bd472b25dc3bc16834827e4f35b213914db7b11a539339c92';

const headers = new Headers({
  'Authorization': JSON.stringify({ API_KEY: `${API_KEY}`})
});

export function getProducts () {
  return fetch(`${BASE_URL}`, {headers})
    .then(res => res.json());
}

export function getProduct(id) {
  return fetch(`${BASE_URL}${id}`, {headers})
    .then(res => res.json());
}
