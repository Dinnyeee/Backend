import instance from './BaseURL';

export const getAllPraxises = async () => {
    try{
        const response = await instance.get(`/praxis`);
        return response.data;
    }catch(error){
        console.error('Error fetching all praxises', error);
    }
}

export const getPraxisById = async (id) => {
    try{
        const response = await instance.get(`/praxis/${id}`);
        return response.data;
    }catch(error){
        console.error('Error fetching praxis by id', error);
    }
}

export const createPraxis = async (praxis) => {
    try{
        const response = await instance.post('/praxis', praxis);
        return response.data;
    }catch(error){
        console.error('Error creating praxis', error);
    }
}

export const updatePraxis = async (praxis) => {
    try{
        const response = await instance.put(`/praxis`, praxis);
        return response.data;
    }catch(error){
        console.error('Error updating praxis', error);
    }
}

export const deletePraxis = async (id) => {
    try{
        const response = await instance.delete(`/praxis/${id}`);
        return response.data;
    }catch(error){
        console.error('Error deleting praxis', error);
    }
}