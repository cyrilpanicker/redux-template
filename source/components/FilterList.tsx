/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import {TodoStore} from '../stores/TodoStore';
import {TodoFilterTypes} from '../constants/TodoConstants';
import {applyFilterAction} from '../actions/TodoStoreActions'

const {ALL,COMPLETED,PENDING} = TodoFilterTypes;
const {subscribe,getState,dispatch} = TodoStore;

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
    state = getState();
    
    componentDidMount(){
        this.unsubscribe = subscribe(() => {
            this.setState(getState());
        });
    }
    
    componentWillUnmount(){
        this.unsubscribe();
    }
    
    applyFilter(filter){
        dispatch(applyFilterAction(filter));
    }
    
    render(){
        const {filter} = this.state;
        return (
            <div className="filter-list">
                <Link text={ALL} active={filter === ALL} onClick={this.applyFilter.bind(null,ALL)} />{', '}
                <Link text={COMPLETED} active={filter === COMPLETED} onClick={this.applyFilter.bind(null,COMPLETED)} />{', '}
                <Link text={PENDING} active={filter === PENDING} onClick={this.applyFilter.bind(null,PENDING)} />
            </div>
        );
    }
}