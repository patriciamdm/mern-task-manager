import { SIGNIN_SUCCESS, SIGNIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return { ...state, logged: true, alertmsg: null, loading: false }
        case SIGNIN_ERROR:
        case LOGIN_ERROR:
        case LOG_OUT:
            localStorage.removeItem('token')
            return { ...state, token: null, user: null, logged: null, alertmsg: action.payload, loading: false }
        case GET_USER:
            return { ...state, user: action.payload.user, logged: true, loading: false }
        default:
            return state
    }
}