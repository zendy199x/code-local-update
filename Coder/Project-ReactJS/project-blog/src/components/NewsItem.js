import React, { Component } from 'react';

class NewsItem extends Component {
	render() {
		return (
  			<div className="bg-faded p-4 my-4">
			    <hr className="divider" />
			    <h2 className="text-center text-lg text-uppercase my-0">Beautiful boxes to
			        <strong>showcase your content</strong>
			    </h2>
			    <hr className="divider" />
			    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolore voluptatem, deleniti dignissimos excepturi veritatis cum hic sunt perferendis ipsum perspiciatis nam officiis sequi atque enim ut! Velit, consectetur.</p>
			    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam pariatur perspiciatis reprehenderit illo et vitae iste provident debitis quos corporis saepe deserunt ad, officia, minima natus molestias assumenda nisi velit?</p>
			</div>
		);
	}
}

export default NewsItem;
