import React, { createContext, useContext, useReducer } from 'react';

//context is like a store
export const StateContext = createContext();

//this is normal function which pass provider
//reducer = use for action perform, for login use login action and for logout use logout action
//children = where to prvide the data

export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* always wrap children in provider */}
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);