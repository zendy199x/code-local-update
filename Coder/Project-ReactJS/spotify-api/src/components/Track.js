import React, { Component } from 'react';

class Track extends Component {
    render() {
        let item = {preview_url: '', name: ''};
        item = this.props.item !==null ?  this.props.item : item;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 track">
                <h4>{item.name}</h4>
                <audio src={item.preview_url} controls>Your browser does not support the audio element.</audio>
            </div>
        );
    }
}

export default Track;
