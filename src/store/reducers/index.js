import { combineReducers } from 'redux';
import Authentication from './authReducer';
import Airtime from './airtime.reducers';
import Wallet from "./wallet.reducers";
import Data from "./data.reducers";

const RootReducer = combineReducers({
    Auth: Authentication,
    Airtime,
    Wallet,
    Data
})

export { RootReducer }