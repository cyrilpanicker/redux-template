/// <reference path="../../typings/tsd.d.ts" />
import {TodoStore} from '../stores/TodosStore';
import {TodoActionTypes,TodoFilterTypes} from '../constants/TodoConstants';

import * as React from 'react';

class Link extends React.Component<any,any>{
    render(){
        const {text,active,onClick} = this.props;
        if(active){
            return (
                <span className="active-link">
                    {text}
                </span>
            );
        } else {
            return (
                <a href="#" onClick={onClick} className="link">
                    {text}
                </a>
            );
        }
    }
}

export class FilterList extends React.Component<any,any>{
    
    unsubscribe = null;
    
    componentDidMount(){
        this.unsubscribe = TodoStore.subscribe(this.forceUpdate.bind(this));
    }
    
    componentWIllUnmount(){
        this.unsubscribe();
    }
    
    onFilter(filterType){
        TodoStore.dispatch({
            type:TodoActionTypes.APPLY_FILTER,
            filterType
        });
    }
    
    
    render(){
        const {filter} = TodoStore.getState();
        return (
            <div className="filter-list">
                <Link text={TodoFilterTypes.ALL} active={filter === TodoFilterTypes.ALL} onClick={this.onFilter.bind(null,TodoFilterTypes.ALL)} />{', '}
                <Link text={TodoFilterTypes.COMPLETED} active={filter === TodoFilterTypes.COMPLETED} onClick={this.onFilter.bind(null,TodoFilterTypes.COMPLETED)} />{', '}
                <Link text={TodoFilterTypes.PENDING} active={filter === TodoFilterTypes.PENDING} onClick={this.onFilter.bind(null,TodoFilterTypes.PENDING)} />
            </div>
        );
    }
}