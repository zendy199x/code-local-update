import React, { Component } from 'react';
import {connect} from 'react-redux';
import { firebaseApp, usersRef } from './../firebase';

import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';

class FormSignup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			website: ''
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
		let { email, password, website } = this.state;
		firebaseApp.auth()
			.createUserWithEmailAndPassword(email, password )
			.then(data=> {
				// users/dasdsadsadsd/
				usersRef.child(data.uid).set({
					website,
					isAdmin: false,
					uid: data.uid
				})
				this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_SIGNUP_SUCCESSFULL_TITLE, notify.NOTI_SIGNUP_SUCCESSFULL_MESSAGE );
			})
			.catch( (error) => {
				this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_SIGNUP_FAIL_TITLE, error.message );
			})
		
		event.preventDefault();
	}

	render() {

		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
					<div className="col-sm-6">
						<input value={this.state.email} onChange={this.handleChange} name="email" type="text" className="form-control" id="inputEmail3" placeholder="Email" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-6">
						<input value={this.state.password} onChange={this.handleChange} name="password" type="text" className="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="inputEmail3" className="col-sm-2 control-label">Website</label>
					<div className="col-sm-6">
						<input value={this.state.website} onChange={this.handleChange} name="website" type="text" className="form-control" id="inputEmail3" placeholder="Website" />
					</div>
				</div>

				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-6">
						<button type="submit" className="btn btn-success">Sign up</button>
					</div>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeNotify: (style, title, content) => {
            dispatch(actChangeNotify(style, title, content));
        }
    }
}

export default connect(null, mapDispatchToProps)(FormSignup);