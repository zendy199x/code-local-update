import React, { Component } from 'react';

class TaskFinishItem extends Component {

    render() {
        let item = {name: '', email: ''};
        item = (this.props.item !== undefined) ? this.props.item : item;

        return (
            <li className="list-group-item">
                <p className="task">{item.name}</p>
                <span className="author">
                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    &nbsp;{item.email}
                </span>
            </li>
        );
    }
}

export default TaskFinishItem;
