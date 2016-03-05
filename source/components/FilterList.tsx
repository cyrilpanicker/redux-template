/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import {connect} from 'react-redux';
import {TodoFilterTypes} from '../constants/TodoConstants';
import {applyFilterAction} from '../actions/TodoStoreActions'

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

class LinkList extends React.Component<any,any>{
    
    render(){
        const {activeFilter,onClick} = this.props;
        return (
            <div className="link-list">
                <Link text={ALL} active={activeFilter === ALL} onClick={onClick.bind(null,ALL)} />{', '}
                <Link text={COMPLETED} active={activeFilter === COMPLETED} onClick={onClick.bind(null,COMPLETED)} />{', '}
                <Link text={PENDING} active={activeFilter === PENDING} onClick={onClick.bind(null,PENDING)} />
            </div>
        );
    }
}

const mapStateToProps = ({filter}) => {
    return {
        activeFilter:filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick:(filter) => {
            dispatch(applyFilterAction(filter));
        }
    };
};

export const FilterList = connect(mapStateToProps,mapDispatchToProps)(LinkList);