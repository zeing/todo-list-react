import React, {Component} from 'react';

class ListItem extends Component {
    state = {
        value: '',
        check: false,
    }

    render() {
        return (
            <li>
                <div className="flex items-center border-b border-b-2 border-teal py-2 w-full">
                    <input type="checkbox" className="rounded-full h-10"/>
                    <input
                        className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" aria-label="Full name">
                    </input>

                </div>
            </li>
        );
    }
}

export default ListItem;
