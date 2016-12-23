import { combineReducers } from 'redux';

import navigationState from '../features/navigation/NavigationState';
import counterState from '../features/counter/counterState';
import sessionState, {RESET_STATE} from '../features/session/SessionState';


const rootReducer = combineReducers({
  InavigationState:navigationState,
  IcounterState:counterState,
  IsessionState:sessionState
});
export default rootReducer;
