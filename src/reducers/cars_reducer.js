import { FETCH_CARS } from '../actions';
import { SELECTED_CAR } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARS: {
      if(action.payload.cars === undefined) {
        return state
      } else {
        return action.payload.cars;
      }
    }
    case SELECTED_CAR: {
      return 'Waddup'
    }
    default:
      return state;
  }
}
