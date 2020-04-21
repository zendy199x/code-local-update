import React, { Component } from 'react';
import NewsItem from './../components/NewsItem';
import BlogItem from './../components/BlogItem';
class AboutPage extends Component {
	render() {
		return (
  			<div>
			    <NewsItem />
			    <BlogItem />
			    <NewsItem />
			</div>
		);
	}
}

export default AboutPage;
