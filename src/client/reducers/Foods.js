import Immutable from 'immutable';
import { createActionTypes, actionsMapToReducer } from './Utils';

const actionTypes = createActionTypes([
  'SET_FOODS'
]);

// Dispatch (mapDispatchToProps)
export const actionCreators = {
  set(foods) {
    return {
      type: actionTypes.SET_FOODS,
      foods
    };
  }
};

const actionsMap = {
  [actionTypes.SET_FOODS]: (state, action) =>
    Immutable.Map(action.foods)
};

export default actionsMapToReducer(Immutable.Map(), actionsMap);