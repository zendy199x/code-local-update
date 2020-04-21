import React, { Component } from 'react';
import { firebaseApp } from './../firebase';

class FormUser extends Component {
	handleClick = () => {
		firebaseApp.auth().signOut();
	}
	
	render() {
		let user = this.props.user.info;
		let xhtmlAdmin = (user.isAdmin === true ) ? <h4>Admin</h4> : "";
		
		return (
			<div>
				<h4>Email: {user.email}</h4>
				<h4>UserID: {user.uid}</h4>
				<h4>Website: {user.website}</h4>
				{xhtmlAdmin}
				<button onClick={this.handleClick} type="submit" className="btn btn-success">Logout</button>
			</div>
		);
	}
}

export default FormUser;