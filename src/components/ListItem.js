import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: '',
        check: false,
    }

    render() {
        const value = this.props.list.name;
        const isCompleted = this.props.list.isCompleted;
        const onToggleListItem = this.props.onToggleListItem;
        const onEditTask = this.props.onEditTask;
        return (
            <li>
                <div className="flex items-center border-b border-b-2 border-teal py-2 w-full">
                    <input checked={isCompleted}  type="checkbox" onChange={onToggleListItem} className="rounded-full h-10" id={this.props.list.id}/>
                    <input value={value} onChange={onEditTask} id={this.props.list.id}
                        className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" aria-label="Full name">
                    </input>

                </div>
            </li>
        );
    }
}

export default ListItem;
