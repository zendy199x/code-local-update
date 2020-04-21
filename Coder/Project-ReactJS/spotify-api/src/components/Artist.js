import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Artist extends Component {
    render() {
        let item   = {
            id: '',
            name: '',
            genres: [],
            images: [{url: ''},{url: ''}]
        };

        item = this.props.item !== null ? this.props.item : item;
        
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    {this.showImage(item)}
                    <div className="caption">
                        <h3>
                            <Link to={`artist/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p>{this.showGenres(item.genres)}</p>
                    </div>
                </div>
            </div>
        );
    }
    
    showGenres(genres){
        let xhtml     = null;
        if(genres !== null && genres.length > 0 ){
            xhtml = genres.map((genre, index)=> {
                return (
                    <span key={index} style={{ marginRight: 5 }} className="label label-warning">
                        {genre}
                    </span>
                );
            });
        }
        return xhtml;
    }

    showImage(item){
        let xhtml     = null;
        if(item.images !== null && item.images.length > 1 ){
            xhtml = <img src={ item.images[1].url } alt={ item.name } />;
        }
        return xhtml;
    }

}

export default Artist;


