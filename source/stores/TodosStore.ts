/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers,createStore} from 'redux';

import {todos} from '../reducers/todos';
import {filter} from '../reducers/filter';

const reducer = combineReducers({
    todos,
    filter
});

export const TodoStore = createStore(reducer,{},
    window.devToolsExtension ? window.devToolsExtension() : undefined
);