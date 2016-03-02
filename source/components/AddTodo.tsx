/// <reference path="../../typings/tsd.d.ts" />
import {TodoStore} from '../stores/TodosStore';
import {TodoActionTypes} from '../constants/TodoConstants';

import * as React from 'react';


class InputGroup extends React.Component<any,any>{
    
    input = null;
    
    setInput(input){
        this.input = input; 
    }

    onAdd(){
        this.props.onAdd(this.input.value);
        this.input.value = '';
    }

    render(){
        return (
            <div className="input-group">
                <input ref={this.setInput.bind(this)} className="input" />
                <button onClick={this.onAdd.bind(this)} className="add-button">ADD</button>
            </div>
        );
    }
}

export class AddTodo extends React.Component<any,any>{
    
    onAddTodo(text){
        TodoStore.dispatch({
            type:TodoActionTypes.ADD_TODO,
            text:text
        });
    }
    
    render(){
        return (
            <InputGroup onAdd={this.onAddTodo}/>
        );
    }
    
}