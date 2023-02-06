import { createContext, useReducer } from "react";
import storeReducer from "./StoreReducer";

const StoreContext = createContext(undefined);

export const StoreProvider = ({ children }) => {

  const initialState = {
    auth: {
      user: {},
      authed: false
    },
    loading: true,
    dashboardMenu: {
      isOpened: true
    }
  };

  const [store, dispatch] = useReducer(storeReducer, initialState);

  const login = ({ user }) => {
    dispatch({
      type: 'LOGIN',
      payload: { user },
    })
  }

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    })
  }

  const setLoading = (value) => {
    dispatch({
      type: 'SET_LOADING',
      payload: value
    })
  }

  const toggleDashboardMenu = () => {
    dispatch({
      type: 'TOGGLE_DASHBOARD_MENU',
    })
  }

  const openDashboardMenu = () => {
    dispatch({
      type: 'OPEN_DASHBOARD_MENU',
    })
  }

  const closeDashboardMenu = () => {
    dispatch({
      type: 'CLOSE_DASHBOARD_MENU',
    })
  }

  return (
    <StoreContext.Provider value={{
      store,
      login,
      logout,
      setLoading,
      toggleDashboardMenu,
      openDashboardMenu,
      closeDashboardMenu,
    }}>
      {children}
    </StoreContext.Provider>
  )
};

export default StoreContext;
