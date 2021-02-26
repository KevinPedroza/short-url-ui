import axios from 'axios';
import BaseConfig from './../BaseConfig';

// We define a method as a service to bring the data
const fetchTopData = () => {
    return axios.get(BaseConfig.API_URL, {
        headers: {
            'Content-Type':  'application/json'
        }
    }).catch(function (error) {
        if (error.response) {
          return error.response.data;
        }
      });;
};

export default fetchTopData;