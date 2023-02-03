import { createContext, useReducer } from "react";
import storeReducer from "./StoreReducer";

const StoreContext = createContext(undefined);

export const StoreProvider = ({ children }) => {

  const initialState = {
    auth: {
      user: {},
      authed: false
    },
    loading: true
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

  return (
    <StoreContext.Provider value={{
      store,
      login,
      logout,
      setLoading,
    }}>
      {children}
    </StoreContext.Provider>
  )
};

export default StoreContext;
