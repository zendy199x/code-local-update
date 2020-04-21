import React, { Component } from 'react';
import Slider from './../components/Slider';
import NewsItem from './../components/NewsItem';

class HomePage extends Component {
	render() {
		return (
  			<div>
			    <Slider />
			    <NewsItem />
			</div>
		);
	}
}

export default HomePage;
