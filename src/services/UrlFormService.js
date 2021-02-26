import axios from 'axios';
import BaseConfig from './../BaseConfig';

// We define a method as a service to bring the data
const UrlFormService = (url) => {
    return axios.post(`${ BaseConfig.API_URL}/short_urls.json`, {
        full_url: url
    }).catch(function (error) {
        if (error.response) {
          return error.response.data;
        }
      });
};

export default UrlFormService;