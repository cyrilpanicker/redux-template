/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';

class Link extends React.Component<any,any>{
    onClick(event){
        event.preventDefault();
        const {value,onClick} = this.props;
        onClick(value);
    }
    render(){
        const {value,selected,children} = this.props;
        if(value === selected){
            return (
                <span className="selected-link">
                    {children}
                </span>
            );
        }
        return (
            <a href="#" onClick={this.onClick.bind(this)} className="link">
                {children}
            </a>
        );
    }
}

export = Link;