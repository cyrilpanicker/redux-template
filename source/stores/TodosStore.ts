/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers,createStore,compose} from 'redux';

import {todos} from '../reducers/todos';
import {filter} from '../reducers/filter';
import {DevTools} from '../DevTools';

const reducer = combineReducers({
    todos,
    filter
});

const enhancer:any = compose(
    DevTools.instrument()
);

export const TodoStore = createStore(reducer,{},enhancer);