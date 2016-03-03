/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import {Todo} from './components/Todo';
import {showDevTools} from './DevTools';
import {TodoStore} from './stores/TodosStore';

var _react = React;

$(()=>{
    $(document.body).append('<div id="mount"></div>');
    ReactDOM.render(
        <Todo/>,
        $('#mount')[0]
    );
    showDevTools(TodoStore);
});