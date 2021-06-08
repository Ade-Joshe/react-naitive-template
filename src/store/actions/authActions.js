import processRequest from '../../api/requestProcessor';
import { Alert } from 'react-native';
import config from '../../../config';
import axios from 'axios';

export const SAVE_LOCAL_USER = "SAVE_LOCAL_USER";
export const SAVING_TO_LOCAL = "SAVING_TO_LOCAL";
export const DONE_SAVING_TO_LOCAL = "DONE_SAVING_TO_LOCAL";
export const LOGIN = "LOGIN";
export const FIRST_TIME = "FIRST_TIME";
export const LOGOUT = "LOGOUT";

const handleLogin = async (data) => {
    axios.defaults.baseURL = config.createWalletUrl;

    return await processRequest.sendPost('/Login', data)
        .then(result => {
            if (String(result.status).startsWith("20")) {
                return { success: true, data: result.data }
            }
            else {
                console.log("not a 200 error: ", result.data)
                return { success: false, data: result.data }
            }
        })
        .catch((error) => {
            Alert.alert("", error.response.data.message);
            return { success: false, data: error.response.data }
        })
}

const handleForgotPassword = (data) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            return processRequest.sendPost('/user/forgotpassword', data)
                .then(result => {
                    if (result.data.success) {
                        return resolve({ success: true, data: result.data })
                    }
                    else {
                        Alert.alert("", result.data.data.message)
                        return resolve({ success: false, data: result.data })
                    }
                })
                .catch((error) => {
                    return reject({ success: false, data: error })
                })
        })
    }
}

const handleSignUp = async (data) => {

    axios.defaults.baseURL = config.createWalletUrl;
    return await processRequest.sendPost("/RegisterUser", data)
        .then(result => {
            if (String(result.status).startsWith("20"))
                return { success: true, data: result.data }
            else {
                return { success: false, data: result.data }
            }
        })
        .catch((error) => {
            // console.log(error.response);
            Alert.alert("", error.response.data.message);
            return { success: false, data: error }
        })
}


export {
    handleLogin, handleSignUp, handleForgotPassword
}