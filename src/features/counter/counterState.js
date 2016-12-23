
import {generateGetThunk,createAction} from '../../common/commonAction';
import {fromJS} from 'immutable';


 const INCREMENT = "counterState/INCREMENT",
  RESET = "counterState/RESET",
  RANDOM_REQUEST = "counterState/RANDOM_REQUEST",
  RANDOM_RESPONSE = "counterState/RANDOM_RESPONSE";

async function generateRandomNumber() {
  // simulate an asynchronous operation
  return new Promise((res) => setTimeout(res, 1000))
    .then(() => Math.floor(Math.random() * 100));
}

 function increment() {
  return {type: INCREMENT};
}

 function reset() {
  return {type: RESET};
}

 function getRandom(obj) {
  return {
    type: RANDOM_RESPONSE,
    payload: obj.number
  };
}

const random = generateGetThunk(createAction(RANDOM_RESPONSE), '/test/api');

/**
 * export the acitons
*/
export const actions = {
    generateRandomNumber,
    increment,
    random,
    reset
};

// Initial state
const initialState = fromJS({
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
        .set('value', action.data.number);

    default:
      return state;
  }
}