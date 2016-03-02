/// <reference path="../../typings/tsd.d.ts" />
import {TodoStore} from '../stores/TodosStore';
import {TodoActionTypes,TodoFilterTypes} from '../constants/TodoConstants';

import * as React from 'react';


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
    
    componentDidMount(){
        this.unsubscribe = TodoStore.subscribe(this.forceUpdate.bind(this));
    }
    
    componentWillUnmount(){{
        this.unsubscribe();
    }}
    
    onTodoCLick(id){
        TodoStore.dispatch({
            type:TodoActionTypes.TOGGLE_TODO_STATE,
            id:id
        });
    }
    
    getFilteredTodos(){
        const {todos,filter} = TodoStore.getState();
        let filteredTodos:any[] = todos;
        if(filter === TodoFilterTypes.COMPLETED){
            filteredTodos = filteredTodos.filter(todo => todo.complete);
        } else if(filter === TodoFilterTypes.PENDING){
            filteredTodos = filteredTodos.filter(todo => !todo.complete);
        }
        return filteredTodos;
    }
    
    render(){
        const todos = this.getFilteredTodos();
        return (
            <List items={todos} onItemClick={this.onTodoCLick} />
        );
    }

}