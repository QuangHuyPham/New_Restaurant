import Immutable from 'immutable';
import { createActionTypes, actionsMapToReducer } from './Utils';

const actionTypes = createActionTypes([
    'SET_RESTAURANTS_DETAILS'
]);

// Định nghĩa Dispatch (mapDispatchToProps)
export const actionCreators = {
    set(restaurantId, details) {
        return {
            type: actionTypes.SET_RESTAURANTS_DETAILS,
            restaurantId, details
        };
    }
};

// Định nghĩa Reducer SET_RESTAURANTS
const actionsMap = {
    [actionTypes.SET_RESTAURANTS_DETAILS]: (state, action) =>
        state.set(action.restaurantId, Immutable.fromJS(action.details))
};
export default actionsMapToReducer(Immutable.Map(), actionsMap);