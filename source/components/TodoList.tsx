/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import {assign} from 'underscore';
import {connect} from 'react-redux';
import {TodoFilterTypes} from '../constants/TodoConstants';
import {toggleTodoStateAction} from '../actions/TodoStoreActions';

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
        const {items,onItemClick} = this.props;
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

const getFilteredTodos = ({todos,filter}) => {
    let filteredTodos:any[] = todos;
    if(filter === COMPLETED){
        filteredTodos = filteredTodos.filter(todo => todo.complete);
    } else if(filter === PENDING){
        filteredTodos = filteredTodos.filter(todo => !todo.complete);
    }
    return filteredTodos;
}

const mapStateToProps = (state,ownProps) => {
    return {
        items:getFilteredTodos(state)
    };
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onItemClick:(id) => {
            dispatch(toggleTodoStateAction(id));
        }
    };
};

export const TodoList = connect(mapStateToProps,mapDispatchToProps)(List);