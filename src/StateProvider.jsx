import React, { createContext, useContext, useReducer } from "react";

// Prepare data layer
export const context = createContext();

// Provide the data by wrapping the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </context.Provider>
);

export const useStateValue = () => useContext(context);











