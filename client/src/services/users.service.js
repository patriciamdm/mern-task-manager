import axios from 'axios'


class UsersService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/users',
            withCredentials: true
        })
    }

    signup = data => this.apiHandler.post('/', data)
}
    
export default UsersService