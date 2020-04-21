import React, { Component } from 'react';

class Slider extends Component {
	render() {
		return (
  			<div className="bg-faded p-4 my-4">
			    {/* Image Carousel */}
			    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			        <ol className="carousel-indicators">
			            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
			            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
			            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
			        </ol>
			        <div className="carousel-inner" role="listbox">
			            <div className="carousel-item active">
			                <img className="d-block img-fluid w-100" src="img/slide-1.jpg" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h3 className="text-shadow">First Slide</h3>
			                    <p className="text-shadow">This is the caption for the first slide.</p>
			                </div>
			            </div>
			            <div className="carousel-item">
			                <img className="d-block img-fluid w-100" src="img/slide-2.jpg" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h3 className="text-shadow">Second Slide</h3>
			                    <p className="text-shadow">This is the caption for the second slide.</p>
			                </div>
			            </div>
			            <div className="carousel-item">
			                <img className="d-block img-fluid w-100" src="img/slide-3.jpg" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h3 className="text-shadow">Third Slide</h3>
			                    <p className="text-shadow">This is the caption for the third slide.</p>
			                </div>
			            </div>
			        </div>
			        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			        <span className="carousel-control-prev-icon" aria-hidden="true" />
			        <span className="sr-only">Previous</span>
			        </a>
			        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			        <span className="carousel-control-next-icon" aria-hidden="true" />
			        <span className="sr-only">Next</span>
			        </a>
			    </div>
			    {/* Welcome Message */}
			    <div className="text-center mt-4">
			        <div className="text-heading text-muted text-lg">Welcome To</div>
			        <h1 className="my-2">Business Casual</h1>
			        <div className="text-heading text-muted text-lg">By
			            <strong>Start Bootstrap</strong>
			        </div>
			    </div>
			</div>
		);
	}
}

export default Slider;
