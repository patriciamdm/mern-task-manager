import React, { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'

import apiHandler from '../../services/api.service'
import tokenService from '../../services/token.service'

import { SIGNIN_SUCCESS, SIGNIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        logged: null,
        user: null,
        alertmsg: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const signUp = async info => {
        try {
            const response = await apiHandler.post('/api/users', info)
            dispatch({ type: SIGNIN_SUCCESS, payload: response.data })
            getUserLogged()
        } catch (err) {
            const alert = { msg: err.response.data.msg, category: 'alert-error'}
            dispatch({ type: SIGNIN_ERROR, payload: alert })
        }
    }
    
    const logIn = async info => {
        try {
            const response = await apiHandler.post('/api/auth', info)
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            getUserLogged()
        } catch (err) {
            console.log(err.response.data)
            const alert = { msg: err.response.data.msg, category: 'alert-error'}
            dispatch({ type: LOGIN_ERROR, payload: alert })
        }
    }

    const getUserLogged = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            tokenService(token)
        }
        try {
            const response = await apiHandler.get('/api/auth')
            dispatch({type: GET_USER, payload: response.data})
        } catch (err) {
            console.log(err.response)
            dispatch({type: LOGIN_ERROR})
        }
    }

    const logOut = () => dispatch({type: LOG_OUT})

    return (
        <authContext.Provider value={{
            token: state.token, logged: state.logged, user: state.user, alertmsg: state.alertmsg,
            signUp, logIn, getUserLogged, logOut
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState