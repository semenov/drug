import * as service from '../services/ListsService';
import { createAction } from 'redux-actions';

export const setLists = createAction('LISTS_SET', service.getLists);
export const setCurrentList = createAction('CURRENT_LIST_SET', service.getListById);
