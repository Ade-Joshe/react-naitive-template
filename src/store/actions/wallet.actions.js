import axios from 'axios';
import { Alert } from 'react-native';
import config from '../../../config';
import processRequest from '../../api/requestProcessor';

export const CREATE_WALLET = "CREATE_WALLET";
export const FETCH_BALANCE = "FETCH_BALANCE";
// export const FUND_WALLET = "FUND_WALLET";

const createWallet = (payload) => {
    return async dispatch => {
        return await processRequest.sendPost('/wallets', payload)
            .then(result => {

                console.log("the result is: ", result.data);
                if (String(result.status).startsWith("20")) {

                    if (!result.data.message) {
                        Alert.alert("", "Wallet created successfully")
                        dispatch({
                            type: CREATE_WALLET,
                            payload: result.data.table.payload
                        })
                    }
                    else {
                        Alert.alert("", result.data.message)
                    }
                } else {
                    Alert.alert("", "Something went wrong")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const fundWallet = async (payload, dispatch) => {

    dispatch({ type: "FETCHING_WALLET" });

    axios.defaults.baseURL = config.createWalletUrl;
    return await processRequest.sendPost('/FundWallet', payload)
        .then(result => {

            console.log("result :", result.data);

            return {
                message: result.data.message,
                success: result.data.status === 200 ? true : false,
            }
        })
        .catch((error) => {
            console.log(error);
            return {};
        }).finally(() => {
            dispatch({ type: "DONE_FETCHING_WALLET" })
        })
}

const fetchWalletBalance = (payload) => {

    axios.defaults.baseURL = config.createWalletUrl;
    return async dispatch => {
        return await processRequest.sendPost('/wallet_balances', payload)
            .then(result => {
                if (String(result.status).startsWith("20")) {

                    dispatch({
                        type: FETCH_BALANCE,
                        payload: result.data.balances
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const IntraWalletTransfer = async (payload) => {

    axios.defaults.baseURL = config.createWalletUrl;
    return await processRequest.sendPost('/IntraWalletTransfer', payload)
        .then(result => {
            if (String(result.status).startsWith("20")) {
                Alert.alert("", result.data.message);
                return { success: true, data: result.data }
            }
            else {
                return { success: false, data: result.data }
            }
        })
        .catch((error) => {
            console.log(error.response.data)
            Alert.alert("", error.response.data?.message);
            return { success: false, error: error.response.data }
        })
}

const InterWalletTransfer = async (payload) => {

    axios.defaults.baseURL = config.createWalletUrl;
    return await processRequest.sendPost('/InterWalletTransfer', payload)
        .then(result => {
            if (String(result.status).startsWith("20")) {
                Alert.alert("", result.data.message);
                return { success: true, data: result.data }
            }
            else {
                return { success: false, data: result.data }
            }
        })
        .catch((error) => {
            console.log(error.response.data)
            Alert.alert("", error.response.data?.message);
            return { success: false, error: error.response.data }
        })
}

const SameBankTransfer = async (payload) => {

    axios.defaults.baseURL = config.createWalletUrl;
    return await processRequest.sendPost('/SameBankTransfer', payload)
        .then(result => {
            console.log(paylresult.data)
            if (String(result.status).startsWith("20")) {
                Alert.alert("", result.data.message);
                return { success: true, data: result.data }
            }
            else {
                return { success: false, data: result.data }
            }
        })
        .catch((error) => {
            console.log(error.response.data)
            Alert.alert("", error.response.data?.message);
            return { success: false, error: error.response.data }
        })
}

const GetClientBankAccount = async (email) => {

    axios.defaults.baseURL = config.createWalletUrl;
    return await processRequest.sendGet(`/CustomerBankAccounts?Email=${email}`)
        .then(result => {
            if (String(result.status).startsWith("20")) {

                return { success: true, data: result.data }
            }
            else {
                return { success: false, data: result.data }
            }
        })
        .catch((error) => {
            Alert.alert("", "Email " + error.response.data.error)
        })
}

const getBanks = async () => {
    axios.defaults.baseURL = config.createWalletUrl;
    return await processRequest.sendGet('/banks')
        .then(result => {
            if (String(result.status).startsWith("20")) {
                return result.data;
            }
            return [];
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            axios.defaults.baseURL = config.createWalletUrl;
        })
}

export {
    createWallet,
    fundWallet,
    fetchWalletBalance,
    getBanks,
    IntraWalletTransfer,
    InterWalletTransfer,
    GetClientBankAccount,
    SameBankTransfer
}