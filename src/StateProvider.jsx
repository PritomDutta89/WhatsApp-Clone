import React, { createContext, useContext, useReducer } from 'react';

//context is like a store (means StateContext store data)
export const StateContext = createContext();

//this is normal function which pass provider
//reducer = use for action perform, for login use login action and for logout use logout action
//children = where to provide the data

export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* always wrap children in provider */}
        {children}
    </StateContext.Provider>
)

// here have the data with the help of useContetxt hook
export const useStateValue = () => useContext(StateContext);