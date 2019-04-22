import React, { Component } from 'react';
import ListItem from './ListItem';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onCreateNewItem = this.props.onCreateNewItem;
        return (
            <div className="flex justify-between w-full">
                <h1>New List</h1>
                <button onClick={onCreateNewItem} className="btn btn-blue">
                    +
                </button>
            </div>
        );
    }
}

export default Item;
