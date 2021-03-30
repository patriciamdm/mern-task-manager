import apiHandler from './api.service'

const tokenService = token => {
    if (token) {
        apiHandler.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete apiHandler.defaults.headers.common['x-auth-token'];
    }
}

export default tokenService