/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers,createStore} from 'redux';

import todos from '../reducers/todos';
import filter from '../reducers/filter';

var reducer = combineReducers({
    todos,
    filter
});

export default createStore(reducer);