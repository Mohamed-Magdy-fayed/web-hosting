import { logger } from "../middleware/logger"

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            logger(state, action)
            return {
                ...state,
                auth: {
                    user: { ...action.payload.user },
                    authed: true
                },
            }
        case 'LOGOUT':
            logger(state, action)
            return {
                ...state,
                auth: {
                    user: {},
                    authed: false
                },
            }
        case 'SET_LOADING':
            logger(state, action)
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state
    }
}

export default storeReducer