/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';

class ListItem extends React.Component<any,any>{
    render(){
        const {id,text,complete,onClick} = this.props;
        return (
            <li onClick={onClick.bind(null,id)} className={'list-item'+(complete?' completed':'')}>
                {text}
            </li>
        );
    }
}

export class List extends React.Component<any,any>{
    render(){
        const {items,onItemClick} = this.props;
        return (
            <ul>
                {
                    items.map(item => {
                        return (
                            <ListItem
                                key = {item.id}
                                id = {item.id}
                                text = {item.text}
                                complete={item.complete}
                                onClick = {onItemClick}
                                className="list"
                            />
                        );
                    })
                }
            </ul>
        );
    }
}