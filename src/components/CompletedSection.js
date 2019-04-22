import React, { Component } from 'react';
import List from './List';
import ListItem from "./ListItem";

class CompletedSection extends Component {
    constructor (props) {
        super(props);
    }


    render() {
        const listsProp = this.props.lists ? this.props.lists.filter( list =>  list.isCompleted) : [];
        if(listsProp.length) {
            const list = listsProp.map(list =>
                <ListItem list={list}></ListItem>
            );
            return (
                <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full">
                        <span>{listsProp.length} Completed</span>
                        <button>Hide</button>
                    </div>
                    <div>
                        <ul className="list-reset">
                            {
                                list
                            }
                        </ul>
                    </div>
                </div>
            );
        } else {
            return '';
        }

    }
}

export default CompletedSection;
