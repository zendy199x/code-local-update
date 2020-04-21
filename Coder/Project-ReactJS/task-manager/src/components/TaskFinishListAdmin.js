import React, { Component } from 'react';

import TaskFinishItemAdmin from './TaskFinishItemAdmin';

import { tasksCompletedRef } from './../firebase';
import * as notify from './../constants/Notify';

class TaskFinishListAdmin extends Component {
    
    constructor(props) {
		super(props);

		this.state = {
            items: []
		};
    }

    componentWillMount(){
        tasksCompletedRef.on('value', items => {
            let data = [];
            items.forEach(item => {
                const {email, name} = item.val();
                data.push({email, name, key: item.key} );
            })
            this.setState({items: data});
        })
    }

    handleClear = () => {
        tasksCompletedRef.set([]);
        this.props.changeNotify(notify.NOTI_TYPE_WARNING, notify.NOTI_CLEARALL_TASK_TITLE, notify.NOTI_CLEARALL_TASK_MESSAGE );
    }
    
    render() {
        let {items} = this.state;
        
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Finish</h3>
                </div>
                <div className="panel-body">
                     {this.showElementBody(items)}
                </div>
                <div className="panel-footer text-right">
                    <button onClick={this.handleClear} type="button" className="btn btn-danger">Clear All</button>
                </div>
            </div>
        );
    }

    showElementBody(items, isAdmin){
		let xhtml = null;
		if(items.length > 0 ){
            xhtml = items.map((item, index)=> {
                return (
                    <TaskFinishItemAdmin changeNotify={this.props.changeNotify} key={index } item={item} index={index} />
                );
            });
            return <ul className="list-group">{xhtml}</ul>;
        }else{
            return <h4>Loading</h4>;
        }
	}
}

export default TaskFinishListAdmin;

