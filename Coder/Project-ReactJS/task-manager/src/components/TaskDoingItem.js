import React, { Component } from 'react';

import { tasksCompletedRef, tasksRef } from './../firebase';

import * as notify from './../constants/Notify';

class TaskDoingItem extends Component {

    handleCompleted = (item) => {
        // Remove tasks
        tasksRef.child(item.key).remove();
        // Add taskCompleted
        tasksCompletedRef.push(item);

        this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_COMPLETED_TASK_TITLE, notify.NOTI_COMPLETED_TASK_MESSAGE );
    }
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
                <button onClick={() => this.handleCompleted(item)} type="button" className="btn btn-warning btn-xs">Completed</button>
            </li>
        );
    }
}

export default TaskDoingItem;

