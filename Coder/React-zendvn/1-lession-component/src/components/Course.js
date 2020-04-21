import React, { Component } from 'react';
import Lession from './Lesson';

class Course extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isShowOutline: true,
			totalStudent: 69
		}

		this.handleClick3 = this.handleClick3.bind(this);
		this.registerCourse = this.registerCourse.bind(this);
	}

	handleClick1() {
		alert("View 1");
	}

	handleClick2(content) {
		alert(content);
	}

	handleClick3() {
		alert(this.props.name);
	}

	registerCourse() {
		console.log(this.refs.username.value)
	}

	handleToogleOutline = () => {
		this.setState({
			isShowOutline: !this.state.isShowOutline
		});
	}

	showButtonFree() {
	const isFree = this.props.free;
		if(isFree === true) {
			return (
				<div className="btn-group">
					<button onClick={this.handleClick1} type="button" className="btn btn-warning">View <span class="ai-music-1"></span></button>
					<button onClick={() => this.handleClick2("View 2")} type="button" className="btn btn-danger">View 2</button>
					<button onClick={() => this.handleClick3} type="button" className="btn btn-success">View 3</button>
				</div>
			)
		} else {
   			return (
				<div className="input-group">
					<span className="input-group-btn">
				 		<button onClick={this.registerCourse} className="btn btn-info" type="button">Register</button>
				</span>
				<input type="text" className="form-control" placeholder="username" refs="username"/>
				</div>
			);
		}
	}

    render() {
    	console.log(this.state);
    	let elementOutline = '';
    	if(this.state.isShowOutline) {
    		elementOutline =  	<ul className="list-group">
			        				<Lession />
			        				<Lession />
			        				<Lession />
		            			</ul>
    	}
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            	<div className="panel panel-info">
            		<div className="panel-heading">
            			<h3 className="panel-title">Tên khoá học: {this.props.name}</h3>
            		</div>
            		<div className="panel-body">
            			<p>Thời lượng: {this.props.time}</p>
            			<p>Chú thích: {this.props.desc}</p>
            			<button onClick={this.handleToogleOutline} className="btn btn-success" type="button">Toogle Outline</button>
            			{ elementOutline }
            		</div>
            		<div className="panel-footer">
            			{ this.showButtonFree() }
            		</div>
            	</div> 	
            </div>
        );
    }
}


export default Course;