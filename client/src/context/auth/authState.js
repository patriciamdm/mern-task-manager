import React, { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'

import { SIGNIN_SUCCESS, SIGNIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    

    return (
        <authContext.Provider value={{
            token: state.token, authenticated: state.authenticated, user: state.user, message: state.message
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState