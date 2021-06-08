import { FETCH_DATA_PLANS, LOGOUT } from "../actions"

const initial_state = {
    dataPlans: []
}

export default DataReducer = (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_DATA_PLANS:
            return { ...state, dataPlans: action.payload }
        case LOGOUT:
            return { ...state, dataPlans: [] }
        default:
            return state
    }
}