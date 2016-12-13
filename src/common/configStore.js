import {applyMiddleware, createStore, compose} from 'redux';
import middleware from '../redux/middleware';
import reducer from './reducer';

// create the store
const store = createStore(
  reducer,
  undefined,
  applyMiddleware(...middleware)
);

export default store;
