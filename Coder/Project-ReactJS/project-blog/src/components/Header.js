import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
  			<div>
			    <div className="tagline-upper text-center text-heading text-shadow text-white mt-5 d-none d-lg-block">Business Casual</div>
			    <div className="tagline-lower text-center text-expanded text-shadow text-uppercase text-white mb-5 d-none d-lg-block">3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>
			</div>
		);
	}
}

export default Header;
