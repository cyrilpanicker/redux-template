/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';
import {FilterList} from './FilterList';

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