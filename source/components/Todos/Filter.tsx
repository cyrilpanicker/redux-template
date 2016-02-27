/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {TodoActionTypes,TodoFilterTypes} from '../../constants/TodoConstants';
import TodosStore from '../../stores/TodosStore';

export default class Filter extends React.Component<any,any>{
    
    applyFilter(event){
        if(event.target.checked){
            TodosStore.dispatch({
                type:TodoActionTypes.APPLY_FILTER,
                filterType:event.target.value
            });
        }
    }
    
    render(){
        return (
            <div className="filter">
                <input type="radio" name="filter" value={TodoFilterTypes.ALL} onChange={this.applyFilter.bind(this)} /> ALL <br/>
                <input type="radio" name="filter" value={TodoFilterTypes.COMPLETED} onChange={this.applyFilter.bind(this)} /> COMPLETED <br/>
                <input type="radio" name="filter" value={TodoFilterTypes.PENDING} onChange={this.applyFilter.bind(this)} /> PENDING <br/>
            </div>
        );
    }
    
}