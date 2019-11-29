export const FETCH_CARS = 'FETCH_CARS';
export const SELECTED_CAR = 'SELECTED_CAR';

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
  console.log("🥴")
  console.log(car)
  return {
    type: SELECTED_CAR,
    payload: car.id
  };
}
