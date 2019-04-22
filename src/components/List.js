import React, { Component } from 'react';
import ListItem from './ListItem';


class Item extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const lists = this.props.lists;
        const onToggleListItem = this.props.onToggleListItem;
        const onEditTask = this.props.onEditTask;
        const list = lists && lists.map((list,index)=>
                <ListItem onToggleListItem={onToggleListItem} onEditTask={onEditTask} list={list} id={index} key={index}></ListItem>
            );
        return (
            <ul className="list-reset">
                {
                    list
                }
            </ul>
        )
    }

    componentDidMount() {
    }
}

export default Item;
