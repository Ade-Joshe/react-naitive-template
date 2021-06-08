import config from '../../config';
import axios from 'axios';

axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = config.createWalletUrl;

//interceptor
axios.interceptors.response.use(function (response) {
    // console.log("success request")
    return response;
}, function (error) {
    // console.log("error is: ", error)
    // console.log("error request", axios.defaults.headers["common"])
    return Promise.reject(error);
});

class processRequest {
    sendGet(url) {
        console.log(url, axios.defaults.baseURL)
        return axios.get(url);
    }

    sendGetWithDifferentBaseUrl(baseUrl, url) {
        console.log(baseUrl, url)
        return axios.get(url);
    }

    sendPost(url, payload = {}) {
        // axios.defaults.baseURL = config.createWalletUrl;
        return axios.post(url, payload);
    }

    async sendFormData(url, payload = {}, token) {
        return axios({
            url: url,
            method: 'POST',
            data: payload,
            headers: {
                Accept: 'application/x-www-form-urlencoded',
                'Content-Type': 'multipart/form-data',
            }
        });
    };

    sendPut(url, payload) {
        return axios.put(url, payload);
    }

    sendDelete(url) {
        return axios.delete(url)
    }
}


export default new processRequest;