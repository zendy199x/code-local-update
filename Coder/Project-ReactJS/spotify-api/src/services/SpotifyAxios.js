import * as configs from './../constants/Config';
import axios from 'axios';

const queryString = require('query-string');

export default class SpotifyAxios {
    static config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + configs.API_KEY
        }
    }

    static getArtist(id){
        let url = `${configs.BASE_URL}artists/${id}`;
        return axios.get(url, SpotifyAxios.config).catch( this.handleError);
    }

    static getAlbums(artistID){
        let strParams = queryString.stringify({
            offset: 0,
            limit: 5
        });

        let url = `${configs.BASE_URL}artists/${artistID}/albums?${strParams}`;
        return axios.get(url, SpotifyAxios.config).catch( this.handleError);
    }

    static getAlbum(albumID){

        let url = `${configs.BASE_URL}albums/${albumID}`;
        return axios.get(url, SpotifyAxios.config).catch( this.handleError);
    }


    static handleError(error){
        console.log(error);
    }
}