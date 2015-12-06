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
    console.log(action.payload, state.set('lists', action.payload).toJS());
    return state.set('lists', action.payload);
}

export function setCurrentList(state, action) {
    return state.set('currentList', action.payload);
}
