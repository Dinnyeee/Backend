import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/auth', 
    timeout: 10000
})


export const login = async (credentials) => {
    try {
        console.log(credentials);
        const response = await instance.post(`/login`, credentials);
        sessionStorage.setItem('token', response.data.accessToken);
        sessionStorage.setItem('role', response.data.role);
        console.log(response.data.token);
    } catch (error) {
        console.error("Error logging in", error);
    }
}

export const register = async (credentials) => {
    try {
        const response = await instance.post(`/register`, credentials);
        sessionStorage.setItem('token', response.data.accessToken);
        sessionStorage.setItem('role', response.data.role);
    } catch (error) {
        console.error("Error registering", error);
    }
}