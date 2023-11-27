import instance from './BaseURL';

export const getAllCases = async () => {
    try{
        const response = await instance.get('/case');
        console.log("Data: " + response.data);
        return response.data;
    }catch(error){
        console.error('Error fetching all cases', error);
    }
}

export const getCaseById = async (id) => {
    try{
        const response = await instance.get(`/case/${id}`);
        return response.data;
    }catch(error){
        console.error('Error fetching case by id', error);
    }
}

export const createCase = async (newCase) => {
    try{
        const response = await instance.post('/case', newCase);
        return response.data;
    }catch(error){
        console.error('Error creating case', error);
    }
}

export const updateCase = async (updateCase) => {
    try{
        const response = await instance.put(`/case`, updateCase);
        return response.data;
    }catch(error){
        console.error('Error updating case', error);
    }
}

export const deleteCase = async (id) => {
    try{
        const response = await instance.delete(`/case/${id}`);
        return response.data;
    }catch(error){
        console.error('Error deleting case', error);
    }
}



