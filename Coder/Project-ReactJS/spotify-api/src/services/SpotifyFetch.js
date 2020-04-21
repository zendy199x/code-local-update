import * as configs from './../constants/Config';
const queryString = require('query-string');

export default class SpotifyFetch {
    static config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + configs.API_KEY
        }
    }

    static getArtists(query){
        let strParams = queryString.stringify({
            type: 'artist',
            limit: 4,
            offset: 0
        });

        let url = `${configs.BASE_URL}search?q=${query}&${strParams}`;
        return fetch(url, SpotifyFetch.config)
            .then((response) => response.json());
    }

}