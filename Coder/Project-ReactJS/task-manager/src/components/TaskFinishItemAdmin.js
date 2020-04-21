import React, { Component } from 'react';
import * as notify from './../constants/Notify';
import { tasksCompletedRef } from './../firebase';

class TaskFinishItemAdmin extends Component {

    handleDelete = (key) => {
        tasksCompletedRef.child(key).remove();
        this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_REMOVE_TASK_TITLE, notify.NOTI_REMOVE_TASK_MESSAGE );
    }
    render() {
        let item = {name: '', email: '', key: ''};
        item = (this.props.item !== undefined) ? this.props.item : item;

        return (
            <li className="list-group-item">
                <p className="task">{item.name}</p>
                <span className="author">
                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    &nbsp;{item.email}
                </span>
                <button onClick={() => this.handleDelete(item.key)} type="button" className="btn btn-danger btn-xs">Delete</button>
            </li>
        );
    }
}


export default TaskFinishItemAdmin;
