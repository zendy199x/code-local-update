import React, { Component } from 'react';

class Product extends Component {
    render() {

        var { match } = this.props;
        console.log(match);
        var name = match.params.name;
        console.log(name);

        return(
            <div>
                Đây là chi tiết sản phẩm: {name}
            </div>
        )
    }
}

export default Product;