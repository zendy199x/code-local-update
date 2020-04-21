import React, { Component } from 'react';
import {actLogout} from './../actions/index';
import {connect} from 'react-redux';

class UserControl extends Component {
	handeLogout = () => {
		this.props.formLogout();
	}
	
	render() {
		let {username} = this.props;
		return (
		    <div className="bg-faded p-4 my-4">
				<hr className="divider" />
				<h2 className="text-center text-lg text-uppercase my-0"><strong>UserControl</strong></h2>
				<hr className="divider" />
				<form  >
				    <div className="row">
				        <div className="form-group col-lg-6">
				            <label className="text-heading">Hello: <strong>{username}</strong></label>
				        </div>
				        <div className="clearfix" />
						<div className="form-group col-lg-12">
							<button onClick={this.handeLogout}  type="button" className="btn btn-secondary">Logout</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        formLogout: () => {
            dispatch(actLogout()) ;
        }
    }
}

export default connect(null, mapDispatchToProps)(UserControl);