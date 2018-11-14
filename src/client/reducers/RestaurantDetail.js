import Immutable from 'immutable';
import { createActionTypes, actionsMapToReducer } from './Utils';

const actionTypes = createActionTypes([
    'SET_RESTAURANTS_DETAILS'
]);

// Dispatch (mapDispatchToProps)
export const actionCreators = {
    set(restaurantId, details) {
        return {
            type: actionTypes.SET_RESTAURANTS_DETAILS,
            restaurantId, details
        };
    }
};

// Thêm dữ liệu cho action
const actionsMap = {
    [actionTypes.SET_RESTAURANTS_DETAILS]: (state, action) =>
        state.set(action.restaurantId, Immutable.Map(action.details))
};
export default actionsMapToReducer(Immutable.Map(), actionsMap);