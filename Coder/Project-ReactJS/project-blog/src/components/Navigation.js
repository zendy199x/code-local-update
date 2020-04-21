import React, { Component } from 'react';
import {Route, NavLink, Link} from 'react-router-dom';

const menus = [
	{to: '/'		, exact: true, name: 'Home'},
	{to: '/about'	, exact: true, name: 'About'},
	{to: '/blog'	, exact: false, name: 'Blog'},
	{to: '/login', exact: true, name: 'Login'}
];

const MenuLink = ({ menu }) => {
	return (
		<Route 
			path={menu.to} 
			exact={menu.exact} 
			children=
				{ 
					({ match }) => {
						let active = (match !== null) ? "active" : "";
						return (
							<li className={`nav-item px-lg-4 ${active}`} >
								<Link to={menu.to} className="nav-link text-uppercase text-expanded">
									{menu.name}
								</Link>
							</li>
						)
					}
				}
		/>
	)
}

class Navigation extends Component {
	render() {
		return (
  			<nav className="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
			    <div className="container">
			    	<NavLink to='/' className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none">
						Start Bootstrap
					</NavLink>
			        
			        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon" />
			        </button>
			        <div className="collapse navbar-collapse" id="navbarResponsive">
			            <ul className="navbar-nav mx-auto">
			            	{this.showMenusTwo(menus)}
			            </ul>
			        </div>
			    </div>
			</nav>
		);
	}
	
	showMenusTwo(menus){
    	let xhtml = null;
		
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}
	
    	return xhtml;
    }

	showMenusOne(menus){
    	let xhtml = null;
		
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<li key={index} className="nav-item px-lg-4" >
						<NavLink exact={menu.exact} to={menu.to} activeClassName="active" className="nav-link text-uppercase text-expanded">
							{menu.name}
						</NavLink>
					</li>
				);
			});
		}
	
    	return xhtml;
    }
}

export default Navigation;
