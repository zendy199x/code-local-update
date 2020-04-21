import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import FormSignin from './../components/FormSignin';

class SigninPage extends Component {
	render() {
		let {user} = this.props;
		
		if(user.isLogin === true) {
			return <Redirect to="/user" />;
		}

		return (
			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Sign In</h3>
				</div>
				<div className="panel-body">
					<FormSignin />
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(SigninPage);