import Immutable from 'immutable';
import { handleActions } from 'redux-actions';

let initialState = Immutable.fromJS({
    moto: 'Yo, bro!'
});

export default handleActions({
    'LISTS_SET': setLists,
    'CURRENT_LIST_SET': setCurrentList
}, initialState);

export function setLists(state, action) {
    return state.set('lists', Immutable.fromJS(action.payload));
}

export function setCurrentList(state, action) {
    return state.set('currentList', action.payload);
}
