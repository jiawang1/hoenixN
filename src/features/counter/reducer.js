import {Map} from 'immutable';
import {RANDOM_RESPONSE,INCREMENT,RESET} from './constants';

// Initial state
const initialState = Map({
  value: 0,
  loading: false
});

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    case RESET:
      return initialState;

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
