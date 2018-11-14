export function createActionTypes(datas) {
    const res = {};
    datas.forEach(index => {
        res[index] = index;
    });
    return res;
}
// Định nghĩa reducer
export function actionsMapToReducer(initialState, actionsMap) {
    return (state = initialState, action) => {
        const func = actionsMap[action.type];
        if (!func) return state;
        return func(state, action);
    };
}