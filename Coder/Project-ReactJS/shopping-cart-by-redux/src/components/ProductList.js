import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
			    <div className="panel panel-primary">
			        <div className="panel-heading">
			            <h1 className="panel-title">List Products</h1>
			        </div>
			        <div className="panel-body" id="list-product">
			            {this.props.children}
			        </div>
			    </div>
			</div>
        );
    }
  
}

export default ProductList;
