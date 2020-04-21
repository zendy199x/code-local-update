import React, { Component } from 'react';

class BlogItem extends Component {
	render() {
		return (
		    <div className="bg-faded p-4 my-4">
			    <div className="card card-inverse">
			        <img className="card-img img-fluid w-100" src="img/slide-1.jpg" alt="slide-1" />
			        <div className="card-img-overlay bg-overlay">
			            <h2 className="card-title text-shadow text-white text-uppercase mb-0">Post Title</h2>
			            <h4 className="text-shadow text-white">March 1, 2017</h4>
			            <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat provident quo aliquam eius ea, animi porro magnam totam dolor nam error quas labore eveniet dicta nostrum inventore veniam. Ipsam?</p>
			            <a href="http://localhost:3000/" className="btn btn-secondary">Read More</a>
			        </div>
			    </div>
			</div>
		);
	}
}

export default BlogItem;
