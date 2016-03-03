/// <reference path="../../typings/tsd.d.ts" />
import {TodoStore} from '../stores/TodosStore';
import {TodoFilterTypes} from '../constants/TodoConstants';
import {toggleTodoState} from '../actions/TodoStoreActions';

import * as React from 'react';
const {ALL,COMPLETED,PENDING} = TodoFilterTypes;


class ListItem extends React.Component<any,any>{
    render(){
        const {text,complete,onClick} = this.props;
        return (
            <li onClick={onClick} className={'list-item'+(complete?' complete':'')}>{text}</li>
        );
    }
}

class List extends React.Component<any,any>{
    render(){
        const{items,onItemClick} = this.props;
        return (
            <ul className="list">
                {
                    items.map(item => {
                        return (
                            <ListItem key={item.id} text={item.text} complete={item.complete} onClick={onItemClick.bind(null,item.id)} />
                        );
                    })
                }
            </ul>
        );
    }
}

export class TodoList extends React.Component<any,any>{
    
    unsubscribe = null;
    state = TodoStore.getState();
    
    componentDidMount(){
        this.unsubscribe = TodoStore.subscribe(() => {
            this.setState(TodoStore.getState());
        });
    }
    
    componentWillUnmount(){{
        this.unsubscribe();
    }}
    
    getFilteredTodos(){
        const {todos,filter} = this.state;
        let filteredTodos:any[] = todos;
        if(filter === COMPLETED){
            filteredTodos = filteredTodos.filter(todo => todo.complete);
        } else if(filter === PENDING){
            filteredTodos = filteredTodos.filter(todo => !todo.complete);
        }
        return filteredTodos;
    }
    
    render(){
        const todos = this.getFilteredTodos();
        return (
            <List items={todos} onItemClick={toggleTodoState} />
        );
    }

}