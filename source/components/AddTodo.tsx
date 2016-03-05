/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../actions/TodoStoreActions';

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

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd:(text) => {
            dispatch(addTodoAction(text));
        }
    };
};

export const AddTodo = connect(null,mapDispatchToProps)(InputGroup);