/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers,createStore} from 'redux';

import {todos} from '../reducers/todos';
import {filter} from '../reducers/filter';

export const TodoStore = createStore(combineReducers({
    todos,
    filter
}));