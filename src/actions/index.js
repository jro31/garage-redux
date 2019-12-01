export const FETCH_CARS = 'FETCH_CARS';
export const SELECTED_CAR = 'SELECTED_CAR';
export const CAR_ADDED = 'CAR_ADDED';

const BASE_URL = 'https://wagon-garage-api.herokuapp.com'

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function selectCar(car) {
  return {
    type: SELECTED_CAR,
    payload: car
  };
}

export function addCar(body) {
  console.log(this)
  console.log(body)
  const request = fetch(`${BASE_URL}/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
  return {
    type: CAR_ADDED,
    payload: request
  };
}
