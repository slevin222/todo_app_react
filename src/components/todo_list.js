import React, { Component } from 'react';
import ListItem from './list_item';


class ToDoList extends Component {

    render() {
        const listItems = this.props.list.map((item, index) => {
            return <ListItem key={index} title={item.title} delete={() => { this.props.delete(item._id) }} toggle={() => { this.props.toggle(item._id) }} />
        });
        console.log("list items todo", this.props.list);

        return (
            <div>
                <ul className="collection z-depth-1">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ToDoList;