import { SAVE_LOCAL_USER, SAVING_TO_LOCAL, DONE_SAVING_TO_LOCAL, LOGIN, LOGOUT, FIRST_TIME } from '../actions';

const initial_state = {
    userDetails: null,
    users: [],
    loading: false,
    isLoggedIn: false,
    initialLoad: false
}

export default AuthenticationReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SAVE_LOCAL_USER:
            return {
                ...state, users: [].concat(state.users).concat(action.payload)
            }
        case SAVING_TO_LOCAL:
            return {
                ...state, loading: true
            }
        case DONE_SAVING_TO_LOCAL:
            return {
                ...state, loading: false
            }
        case FIRST_TIME:
            return {
                ...state, initialLoad: action.payload ? action.payload : false
            }
        case LOGIN:
            return {
                ...state, isLoggedIn: true,
                userDetails: action.payload
            }
        case LOGOUT:
            return {
                ...state, isLoggedIn: false,
            }
        default:
            return state
    }
}