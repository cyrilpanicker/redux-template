/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import TodosApp from './components/Todos/TodosApp';

var _react = React;

$(()=>{
    $(document.body).append('<div id="mount"></div>');
    ReactDOM.render(
        <TodosApp/>,
        $('#mount')[0]
    );
});