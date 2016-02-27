/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import TodosStore from '../../stores/TodosStore';
import Input from './Input';
import List from './List';
import Filter from './Filter';

export default class TodoApp extends React.Component<any,any>{
    
    state = TodosStore.getState();
    unsubscribe = null;
    
    componentDidMount(){
        this.unsubscribe = TodosStore.subscribe(()=>{
            this.setState(TodosStore.getState());
        });
    }
    
    componentWillUnmount(){
        this.unsubscribe();
    }
    
    render(){
        return (
            <div className="todo-app">
                <Input />
                <List items={this.state.todos} filter={this.state.filter} />
                <Filter />
            </div>
        );
    }
    
}