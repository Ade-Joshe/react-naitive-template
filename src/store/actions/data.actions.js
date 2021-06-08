import { Alert } from 'react-native';
import processRequest from '../../api/requestProcessor';

export const FETCH_DATA_PLANS = "FETCH_DATA_PLANS";

const fetchDataPlans = async (id) => {
    return await processRequest.sendGet(`/DataPlans?OperatorCode=${id}`)
        .then(result => {

            console.log(result.data)
            if (String(result.status).startsWith("20")) {
                return result.data
            }
        })
        .catch((error) => {
            return { success: false, data: error }
        })
}

const buyData = async (payload) => {
    return await processRequest.sendPost(`/DataPurchase`, payload)
        .then(result => {
            if (String(result.status).startsWith("20")) {
                console.log("buying data: ", result.data);
                return { data: result.data, success: true };
            }
        })
        .catch((error) => {
            Alert.alert("", error.response.data.message)
            return { success: false, data: error }
        })
}


export {
    fetchDataPlans,
    buyData
}