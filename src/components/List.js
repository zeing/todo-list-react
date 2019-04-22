import React, { Component } from 'react';
import ListItem from './ListItem';


class Item extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const listsProp = this.props.lists ? this.props.lists.filter( list =>  !list.isCompleted) : [];
        if(listsProp.length) {
            const list = listsProp.map(list =>
                <ListItem list={list}></ListItem>
            );
            return (
                <ul className="list-reset">
                    {
                        list
                    }
                </ul>
            );
        } else {
            return '';
        }

    }
    componentDidMount() {
    }
}

export default Item;
