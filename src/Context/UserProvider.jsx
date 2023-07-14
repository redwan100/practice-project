import React, { createContext, useContext, useEffect, useReducer } from "react";
import userReducer, { initialState } from "../States/userReducer";
import {
  FETCHING_FAILURE,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../States/actionTypes";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    dispatch({
      type: FETCHING_START,
    });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCHING_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: FETCHING_FAILURE, error: error.message });
      });
  }, []);

  const user = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export default UserProvider;
