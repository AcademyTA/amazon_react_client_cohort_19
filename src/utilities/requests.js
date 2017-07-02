const BASE_URL = 'http://localhost:3000/api/v1/products/';
const API_KEY = 'be1a461b7f1faa1e36029e019817b8f2b064c687df9268525ba0f5ea22a11065';

const headers = new Headers({
  'Authorization': JSON.stringify({ API_KEY: `${API_KEY}`})
});

const jsonHeaders = new Headers({
  'Authorization': JSON.stringify({ API_KEY: `${API_KEY}`}),
  'Content-Type':'application/json'
});

export function getProducts () {
  return fetch(`${BASE_URL}`, {headers})
    .then(res => res.json());
}

export function getProduct(id) {
  return fetch(`${BASE_URL}${id}`, {headers})
    .then(res => res.json());
}

export function postProduct(data) {
  return fetch(`${BASE_URL}`, {
    method:  "POST",
    body:    JSON.stringify({ product: data }),
    headers: jsonHeaders
  }).then(res => res.json());
}
