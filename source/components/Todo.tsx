/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';
import {FilterList} from './FilterList';
import {TodoStore} from '../stores/TodoStore'

export class Todo extends React.Component<any,any>{
    render(){
        return (
            <div className="todo">
                <AddTodo store={TodoStore}/>
                <TodoList store={TodoStore}/>
                <FilterList store={TodoStore}/>
            </div>
        );
    }
}