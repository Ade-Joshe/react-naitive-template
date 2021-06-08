import { FETCH_NETWORKS, LOGOUT, FETCHING_AIRTIME, DONE_FETCHING_AIRTIME } from "../actions"

const initial_state = {
    networks: [],
    loading: false
}

export default AuthenticationReducer = (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_NETWORKS:
            return { ...state, networks: action.payload }
        case FETCHING_AIRTIME:
            return { ...state, loading: true }
        case DONE_FETCHING_AIRTIME:
            return { ...state, loading: false }
        case LOGOUT:
            return { ...state, networks: [] }
        default:
            return state
    }
}