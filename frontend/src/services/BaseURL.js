import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('token') || '', 'Content-Type': 'application/json'}
})

export default instance