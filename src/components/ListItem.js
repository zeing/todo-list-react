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
        const id = this.props.list.id;
        const onToggleListItem = this.props.onToggleListItem;
        const onDeleteTask = this.props.onDeleteTask;
        const onEditTask = this.props.onEditTask;
        return (
            <li>
                <div className="flex items-center border-b border-b-2 border-teal py-2 w-full">
                    <input checked={isCompleted}  type="checkbox" onChange={onToggleListItem} className="rounded-full h-10" id={id}/>
                    <input value={value} onChange={onEditTask} id={id}
                        className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" aria-label="Full name">
                    </input>
                    <button onClick={() => onDeleteTask(id)}>
                        x
                    </button>

                </div>
            </li>
        );
    }
}

export default ListItem;
