/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {TodoActionTypes} from '../../constants/TodoConstants';
import TodosStore from '../../stores/TodosStore';

export default class Input extends React.Component<any,any>{
    
    textbox = null;
    
    setTextboxReference(textbox){
        this.textbox = textbox;
    }
    
    addTodo(){
        TodosStore.dispatch({
            type:TodoActionTypes.ADD_TODO,
            text:this.textbox.value
        });
    }
    
    render(){
        return (
            <div className="input">
                <input className="text" ref={this.setTextboxReference.bind(this)}/>
                <button className="add" onClick={this.addTodo.bind(this)}>ADD</button>
            </div>
        );
    }
    
}