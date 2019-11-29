import { FETCH_CARS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARS: {
      if(action.payload.cars === undefined) {
        return state
      } else {
        return action.payload.cars;
      }
    }
    default:
      return state;
  }
}
