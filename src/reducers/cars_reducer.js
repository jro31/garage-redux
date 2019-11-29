import { FETCH_CARS } from '../actions';
import { SELECTED_CAR } from '../actions';

export default function(state = null, action) {
  console.log("🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯")
  switch (action.type) {
    case FETCH_CARS: {
      if(action.payload.cars === undefined) {
        return state
      } else {
        return action.payload.cars;
      }
    }
    case SELECTED_CAR: {
      console.log('Howdy')
      return 'Waddup'
    }
    default:
      return state;
  }
}
