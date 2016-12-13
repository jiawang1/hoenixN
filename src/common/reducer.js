import { combineReducers } from 'redux';

import navigationState from '../features/navigation/NavigationState';
import CounterState from '../features/counter/reducer';
import SessionState, {RESET_STATE} from '../features/session/SessionState';

// const reducers = {
//   // Counter sample app state. This can be removed in a live application
//   counter: CounterStateReducer,

//   // @NOTE: By convention, the navigation state must live in a subtree called
//   //`navigationState`
//   navigationState: NavigationStateReducer,

//   session: SessionStateReducer

// };

// // initial state, accessor and mutator for supporting root-level
// // immutable data with redux-loop reducer combinator
// const immutableStateContainer = Map();
// const getImmutable = (child, key) => child ? child.get(key) : void 0;
// const setImmutable = (child, key, value) => child.set(key, value);

// const namespacedReducer = combineReducers(
//   reducers,
//   immutableStateContainer,
//   getImmutable,
//   setImmutable
// );

// export default function mainReducer(state, action) {
//   const [nextState, effects] = action.type === RESET_STATE
//     ? namespacedReducer(action.payload, action)
//     : namespacedReducer(state || void 0, action);

//   // enforce the state is immutable
//   return loop(fromJS(nextState), effects);
// }

const rootReducer = combineReducers({
  InavigationState:navigationState,
  IcounterState:CounterState,
  IsessionState:SessionState
});
export default rootReducer;
