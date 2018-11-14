import Immutable from 'immutable';
import { createActionTypes, actionsMapToReducer } from './Utils';

const actionTypes = createActionTypes([
    'SET_RESTAURANTS'
]);

// Định nghĩa Dispatch (mapDispatchToProps)
export const actionCreators = {
    set(restaurants) {
        return {
            type: actionTypes.SET_RESTAURANTS,
            restaurants
        };
    }
};

// Định nghĩa Reducer SET_RESTAURANTS
const actionsMap = {
    [actionTypes.SET_RESTAURANTS]: (state, action) => Immutable.List(action.restaurants)
};

export default actionsMapToReducer(Immutable.List(), actionsMap);