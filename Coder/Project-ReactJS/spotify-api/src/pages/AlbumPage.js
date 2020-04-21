import React, { Component } from 'react';
import {connect} from 'react-redux';

import SpotifyAxios from './../services/SpotifyAxios';
import Track from './../components/Track';
import {actGoAlbum} from './../actions/index';

class AlbumPage extends Component {
	constructor(props) {
        super(props);
        this.state = {
			album: null,
			tracks: []
		};
	}

	componentWillMount(){
		let {match} = this.props;
		let id 	    = match.params.id;
		
		this.loadAlbum(id);
	}

	loadAlbum(id){
		SpotifyAxios.getAlbum(id).then( (response) => {
			if(response !== undefined && response.data !== null) {
				this.setState({
					album: response.data,
				});
				this.props.changeBreadcrumb(response.data.name, `/album/${response.data.id}`);
			}
		});
	} 

	render() {
		let album  = {
			name: '', 
			id: '', 
			images: [{url: ''}], 
			tracks: { items: [] } 
		};

		album = this.state.album !==null ?  this.state.album : album;

		return (
			<div className="panel panel-danger">
				<div className="panel-heading">
					<h3 className="panel-title">{album.name}</h3>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-sm-4 col-md-4 col-lg-4">
							{this.showImage(album)}
						</div>
						<div className="col-sm-8 col-md-8 col-lg-8">
							<div className="panel panel-warning">
								<div className="panel-heading">
									<h3 className="panel-title">List Tracks</h3>
								</div>
								<div className="panel-body">
									{this.showTracks(album.tracks.items)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	showTracks(tracks){
        let xhtml     = null;
        if(tracks !== null && tracks.length > 0 ){
            xhtml = tracks.map((track, index)=> {
                return (
                    <Track key={index} item={track}/>
                );
            });
        }
        return xhtml;
	}
	
	showImage(item){
        let xhtml     = null;
        if(item.images !== null && item.images.length > 0 ){
            xhtml = <img src={ item.images[0].url } alt={ item.name } className="media-object img-thumbnail" />;
        }
        return xhtml;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeBreadcrumb: (name, to) => {
            dispatch(actGoAlbum(name, to)) ;
        }
    }
}
export default connect(null, mapDispatchToProps)(AlbumPage);
