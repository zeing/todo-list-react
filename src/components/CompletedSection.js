import React, { Component } from 'react';
import List from './List';
import ListItem from "./ListItem";

class CompletedSection extends Component {
    constructor (props) {
        super(props);
    }


    render() {
        const lists = this.props.lists;
        const onToggleCompletedList = this.props.onToggleCompletedList;
        const onToggleListItem = this.props.onToggleListItem;
        const showCompletedList = this.props.showCompletedList;
        let list = '';
        if(showCompletedList) {
            list = lists && lists.map((list, index) =>
                <ListItem onToggleListItem={onToggleListItem} list={list} id={index} key={index}></ListItem>
            );
        }

        return (
            <div className="flex flex-col w-full">
                <div className="flex justify-between w-full">
                    <span>{lists.length} Completed</span>
                    <button onClick={onToggleCompletedList}>Hide</button>
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

    }
}

export default CompletedSection;
