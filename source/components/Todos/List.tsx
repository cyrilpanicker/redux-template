/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {TodoActionTypes,TodoFilterTypes} from '../../constants/TodoConstants';
import TodosStore from '../../stores/TodosStore';

export default class List extends React.Component<any,any>{
    
    toggleTodoState(id){
        TodosStore.dispatch({
            type:TodoActionTypes.TOGGLE_TODO_STATE,
            id:id
        });
    }
    
    getFilteredItems(){
        var items:any[] = this.props.items;
        if(this.props.filter === TodoFilterTypes.COMPLETED){
            items = items.filter(item => {
                return item.complete;
            });
        }
        if(this.props.filter === TodoFilterTypes.PENDING){
            items = items.filter(item => {
                return !item.complete;
            });
        }
        return items;
    }
    
    render(){
        return (
            <ul className="list">
                {
                    this.getFilteredItems.apply(this).map(item => {
                        return (
                            <li className={'item'+(item.complete?' complete':'')}
                                key={item.id}
                                onClick={this.toggleTodoState.bind(null,item.id)}
                            >
                                {item.text}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
    
}