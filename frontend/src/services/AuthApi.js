import axios from 'axios'
import { async } from 'q';

var baseURL = 'http://localhost:8080/auth';

const instance = axios.create({
    baseURL: 'http://localhost:8080/auth', 
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})


export const login = async (credentials) => {
    try {
        console.log("login meghivva");
        const response = await instance.post(`/login`, credentials);
        sessionStorage.setItem('token', response.data.accessToken);
        sessionStorage.setItem('role', response.data.role);
        console.log(response.data.accessToken);
    } catch (error) {
        console.error("Error logging in", error);
    }
}

export const loginFetch = async (credentials) => {
    try {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('role', data.role);
        console.log(data.accessToken);
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