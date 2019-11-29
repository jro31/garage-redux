import { SELECTED_CAR } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SELECTED_CAR: {
      return 'Waddup'
    }
    default: {
      return state;
    }
  }
}
