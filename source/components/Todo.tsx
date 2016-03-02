/// <reference path="../../typings/tsd.d.ts" />

import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';
import {FilterList} from './FilterList';

import * as React from 'react';

export class Todo extends React.Component<any,any>{
    render(){
        return (
            <div className="todo">
                <AddTodo/>
                <TodoList/>
                <FilterList/>
            </div>
        );
    }
}