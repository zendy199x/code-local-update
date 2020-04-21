import React, { Component } from 'react';
import { tasksRef } from './../firebase';

import * as notify from './../constants/Notify';

class FormAddTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: '',
		};
	}

	handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit = (event) => {
		let { task } = this.state;
		let { email } = this.props.user.info;
		
		tasksRef.push({
			name: task,
			email: email
		});

		this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_ADD_TASK_TITLE, notify.NOTI_ADD_TASK_MESSGAE);
		this.setState({task: ''});
		event.preventDefault();
	} 

	render() {
		
		return (
			<form className="form-inline"  onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input value={this.state.task} onChange={this.handleChange} name="task" type="text" className="form-control" placeholder="Task" />
				</div>
				<button type="submit" className="btn btn-info">Add</button>
			</form>
		);
	}
}

export default FormAddTask;