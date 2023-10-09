import { useState } from "react"
import React from "react";

const AuthContext = React.createContext({
    token:'',
    isLoggIn:false,
    login:(token) => {},
    logout: () => {}
})

export const AuthContextProvider = (props) => {
   const intialToken = localStorage.getItem('token')
const [token,setToken] =useState(intialToken);

const userIsLoggin= !!token;

const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token)
}

const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
}

const contextValue = {
    token:token,
    isLoggIn:userIsLoggin,
    login:loginHandler,
    logout:logoutHandler
}

    return <AuthContext.Provider  value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext