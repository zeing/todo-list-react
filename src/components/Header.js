import React, { Component } from 'react';
import ListItem from './ListItem';

class Item extends Component {
    state  = {
    }

    render() {
        return (
            <div className="flex justify-between w-full">
                <h1>New List</h1>
                <button className="btn btn-blue">
                    +
                </button>
            </div>
        );
    }
}

export default Item;
