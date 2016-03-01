/// <reference path="../../typings/tsd.d.ts" />
import {TodoStore} from '../stores/TodosStore';
import {TodoActionTypes,TodoFilterTypes} from '../constants/TodoConstants';

import {List} from './List'; 
import {AddInputForm} from './AddInputForm';
import Link = require('./Link');

import * as React from 'react';

// class Link extends React.Component<any,any>{
//     onClick(event){
//         event.preventDefault();
//         const {value,onClick} = this.props;
//         onClick(value);
//     }
//     render(){
//         const {value,selected,children} = this.props;
//         if(value === selected){
//             return (
//                 <span className="selected-link">
//                     {children}
//                 </span>
//             );
//         }
//         return (
//             <a href="#" onClick={this.onClick.bind(this)} className="link">
//                 {children}
//             </a>
//         );
//     }
// }

export class Todo extends React.Component<any,any>{
    
    unsubscribe = null;
    state = TodoStore.getState();
    
    componentDidMount(){
        this.unsubscribe = TodoStore.subscribe(() => {
            this.setState(TodoStore.getState());
        });
    }
    
    componentWillUnmount(){
        this.unsubscribe();
    }
    
    onAdd(value){
        TodoStore.dispatch({
            type:TodoActionTypes.ADD_TODO,
            text:value
        });
    }
    
    onTodoToggle(id){
        TodoStore.dispatch({
            type:TodoActionTypes.TOGGLE_TODO_STATE,
            id:id
        });
    }
    
    onFilter(filterType){
        TodoStore.dispatch({
            type:TodoActionTypes.APPLY_FILTER,
            filterType
        });
    }
    
    getFilteredTodos(){
        let todos:any[] = this.state.todos;
        if(this.state.filter === TodoFilterTypes.COMPLETED){
            todos = todos.filter(todo => todo.complete);
        }
        if(this.state.filter === TodoFilterTypes.PENDING){
            todos = todos.filter(todo => !todo.complete);
        }
        return todos;
    }
    
    render(){
        const todos = this.getFilteredTodos();
        return (
            <div className="todo">
                <AddInputForm onAdd={this.onAdd.bind(this)} />
                <List items = {todos} onItemClick = {this.onTodoToggle} />
                <Link value={TodoFilterTypes.ALL} onClick={this.onFilter.bind(this)} selected={this.state.filter}>{TodoFilterTypes.ALL}</Link>{','}
                <Link value={TodoFilterTypes.COMPLETED} onClick={this.onFilter.bind(this)} selected={this.state.filter}>{TodoFilterTypes.COMPLETED}</Link>{','}
                <Link value={TodoFilterTypes.PENDING} onClick={this.onFilter.bind(this)} selected={this.state.filter}>{TodoFilterTypes.PENDING}</Link>
            </div>
        );
    }
    
}