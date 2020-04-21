import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Album extends Component {
    render() {
        let {item} = {name: '', images: [{url: ''}], id: ''};
        item		= this.props.item !==null ?  this.props.item : item

        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src={item.images[0].url} alt="{item.name} " className="img-responsive" />
                    <div className="caption">
                        <h5><Link to={`/album/${item.id}`} >{item.name}</Link></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;



