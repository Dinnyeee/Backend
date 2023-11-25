import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const getAllAssistants = async () => {
    try{
        const response = await instance.get('/assistant');
        return response.data;
    }catch(error){
        console.error('Error fetching all assistants', error);
    }
}

export const getAssistantById = async (id) => {
    try{
        const response = await instance.get(`/assistant/${id}`);
        return response.data;
    }catch(error){
        console.error('Error fetching assistant by id', error);
    }
}

export const createAssistant = async (assistant) => {
    try{
        const response = await instance.post('/assistant', assistant);
        return response.data;
    }catch(error){
        console.error('Error creating assistant', error);
    }
}

export const updateAssistant = async (id, assistant) => {
    try{
        const response = await instance.put(`/assistant/${id}`, assistant);
        return response.data;
    }catch(error){
        console.error('Error updating assistant', error);
    }
}

export const deleteAssistant = async (id) => {
    try{
        const response = await instance.delete(`/assistant/${id}`);
        return response.data;
    }catch(error){
        console.error('Error deleting assistant', error);
    }
}

