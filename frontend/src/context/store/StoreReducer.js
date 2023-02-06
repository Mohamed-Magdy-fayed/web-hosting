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
        case 'TOGGLE_DASHBOARD_MENU':
            logger(state, action)
            return {
                ...state,
                dashboardMenu: {
                    isOpened: !state.dashboardMenu.isOpened
                },
            }
        case 'OPEN_DASHBOARD_MENU':
            logger(state, action)
            return {
                ...state,
                dashboardMenu: {
                    isOpened: true
                },
            }
        case 'CLOSE_DASHBOARD_MENU':
            logger(state, action)
            return {
                ...state,
                dashboardMenu: {
                    isOpened: false
                },
            }
        default:
            return state
    }
}

export default storeReducer