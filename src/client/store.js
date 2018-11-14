import Immutable from 'immutable';
import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';

export default createStore(
  RootReducer,
  Immutable.Map()
);