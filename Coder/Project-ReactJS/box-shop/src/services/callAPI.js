import axios from 'axios';
import * as config from './config';

export default function callAPI(endpoint, method='GET', data) {
    return axios({
        url: `${config.API_URL}/${endpoint}`,
        method,
        data
    }).catch(err => {
        console.log(err);
    })
};