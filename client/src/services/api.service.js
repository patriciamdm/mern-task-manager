import axios from 'axios'

const apiHandler = axios.create({
    baseURL: 'http://localhost:5000/'
})


export default apiHandler