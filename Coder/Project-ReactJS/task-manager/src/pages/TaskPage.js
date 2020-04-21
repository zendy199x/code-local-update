import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import TaskDoingList from './../components/TaskDoingList';
import TaskFinishList from './../components/TaskFinishList';
import TaskFinishListAdmin from './../components/TaskFinishListAdmin';

import { actChangeNotify} from './../actions/index';

class TaskPage extends Component {

	render() {
		let {user} = this.props;
		if(user.isLogin === false) {
			return <Redirect to="/signin" />;
		}
		return (
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<TaskDoingList user={user} changeNotify={this.props.changeNotify}/>
				</div>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					{this.showTaskFinishList(user)}
				</div>
			</div>
		);
	}

	showTaskFinishList(user) {
		if(user.info.isAdmin === true) {
			return <TaskFinishListAdmin user={user} changeNotify={this.props.changeNotify} />
		}else {
			return <TaskFinishList user={user}/>
		}
	}
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeNotify: (style, title, content) => {
            dispatch(actChangeNotify(style, title, content));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);

