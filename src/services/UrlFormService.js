import axios from 'axios';
import BaseConfig from './../BaseConfig';

// We define a method as a service to bring the data
const addNewUrl = (url) => {
    return axios.post(BaseConfig.API_URL, {
        full_url: url
    });
};

export default addNewUrl;