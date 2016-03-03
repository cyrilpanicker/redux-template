/// <reference path="../../typings/tsd.d.ts" />
import {TodoStore} from '../stores/TodosStore';
import {TodoFilterTypes} from '../constants/TodoConstants';
import {applyFilter} from '../actions/TodoStoreActions'
import * as React from 'react';

const {ALL,COMPLETED,PENDING} = TodoFilterTypes;

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
    state = TodoStore.getState();
    
    componentDidMount(){
        this.unsubscribe = TodoStore.subscribe(() => {
            this.setState(TodoStore.getState());
        });
    }
    
    componentWIllUnmount(){
        this.unsubscribe();
    }
    
    render(){
        const {filter} = this.state;
        return (
            <div className="filter-list">
                <Link text={ALL} active={filter === ALL} onClick={applyFilter.bind(null,ALL)} />{', '}
                <Link text={COMPLETED} active={filter === COMPLETED} onClick={applyFilter.bind(null,COMPLETED)} />{', '}
                <Link text={PENDING} active={filter === PENDING} onClick={applyFilter.bind(null,PENDING)} />
            </div>
        );
    }
}