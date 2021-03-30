import { SIGNIN_SUCCESS, SIGNIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return { ...state, authenticated: true, message: null }
        case SIGNIN_ERROR:
            return { ...state, token: null, message: action.payload }
        // case GET_USER:
        //     return {  }
        // case LOGIN_SUCCESS:
        //     return {  }
        // case LOGIN_ERROR:
        //     return {  }
        // case LOG_OUT:
        //     return {  }
        default:
            return state
    }
}