import axios from 'axios';
import config from '../../../config';
import processRequest from '../../api/requestProcessor';

export const FETCH_NETWORKS = "FETCH_NETWORKS";
export const FETCHING_AIRTIME = "FETCHING_AIRTIME";
export const DONE_FETCHING_AIRTIME = "DONE_FETCHING_AIRTIME";

const fetchNetorks = () => {

    axios.defaults.baseURL = config.createWalletUrl;
    return async dispatch => {
        return await processRequest.sendGet('/networks')
            .then(result => {
                if (String(result.status).startsWith("20")) {
                    dispatch({
                        type: FETCH_NETWORKS,
                        payload: result.data
                    })
                }
            })
            .catch((error) => {
                console.log("an error: ", error);
                return { success: false, data: error }
            })
    }
}

const buyAirtime = async (data) => {
    return await processRequest.sendPost('/AirtimePurchase', data)
        .then(result => {
            if (String(result.status).startsWith("20")) {
                return { success: true, data: result.data }
            }
        })
        .catch((error) => {
            console.log("airtime error is: ", error.response.data)
            return { success: false, data: error }
        })
}


export {
    fetchNetorks,
    buyAirtime
}