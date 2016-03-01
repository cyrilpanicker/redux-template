/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';

export class AddInputForm extends React.Component<any,any>{
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
            <div className="add-input-form">
                <input ref={this.setInput.bind(this)} className="input"  />
                <button onClick={this.onAdd.bind(this)} className="button">ADD</button>
            </div>
        );
    }
}