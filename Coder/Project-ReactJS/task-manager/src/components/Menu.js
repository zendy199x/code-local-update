import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const MenuLink = ({ menu }) => {
	return (
		<Route path={menu.to} exact={menu.exact} 
			children=
				{ 
					({ match }) => {
						let active = (match !== null && match.isExact===true) ? "active" : "";
						return (
							<NavLink to={menu.to} className={`list-group-item ${active}`}>
								{menu.name}
							</NavLink>
						)
					}
				}
		/>
	)
}

class Menu extends Component {
	componentWillMount(){
		this.createMenu();
	}

	render() {
		return (
			<div className="list-group">{this.showMenus()}</div>
		);
	}

	createMenu(){
		let {user} = this.props;
		
		let menus  = [];

		if(user.isLogin === true) { //login
			menus.push({to: '/task', exact: true, name: 'Task'});
			menus.push({to: '/user', exact: true, name: 'User'});
		}else{
			menus.push({to: '/signin', exact: true, name: 'Signin'});
			menus.push({to: '/signup', exact: true, name: 'Signup'});
		}

		return menus;
	}
	
	showMenus(){
		let xhtml = null;
		let menus  = this.createMenu();
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}
    	return xhtml;
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null, null, {pure:false})(Menu);