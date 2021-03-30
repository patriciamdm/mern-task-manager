import React, { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'

import UsersService from '../../services/users.service'

import { SIGNIN_SUCCESS, SIGNIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const userService = new UsersService()

    const signUp = async info => {
        try {
            const response = await userService.signup(info)
            dispatch({ type: SIGNIN_SUCCESS, payload: response.data })  
        } catch (err) {
            const alert = { msg: err.response.data.msg, category: 'alert-error'}
            dispatch({ type: SIGNIN_ERROR, payload: alert })
        }
    }

    return (
        <authContext.Provider value={{
            token: state.token, authenticated: state.authenticated, user: state.user, message: state.message,
            signUp
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState