import { CREATE_WALLET, FETCH_BALANCE, LOGOUT } from "../actions"

const initial_state = {
    walletDetails: [],
    balance: {},
    loading: false
}

export default AuthenticationReducer = (state = initial_state, action) => {
    switch (action.type) {
        case CREATE_WALLET:
            return { ...state, walletDetails: action.payload }
        case FETCH_BALANCE:
            return { ...state, balance: action.payload }
        case "FETCHING_WALLET":
            return { ...state, loading: true }
        case "DONE_FETCHING_WALLET":
            return { ...state, loading: false }
        case LOGOUT:
            return { ...state, walletDetails: [], balance: {} }
        default:
            return state
    }
}