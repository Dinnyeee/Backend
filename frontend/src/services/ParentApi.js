import instance from "./BaseURL";

export const getAllParents = async () => {
    try {
        const response = await instance.get(`/parent`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all parents", error);
    }
}

export const getParentById = async (id) => {
    try {
        const response = await instance.get(`/parent/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching parent by id", error);
    }
}

export const createParent = async (parent) => {
    try {
        const response = await instance.post(`/parent`, parent);
        return response.data;
    } catch (error) {
        console.error("Error creating parent", error);
    }
}

export const updateParent = async (parent) => {
    try {
        const response = await instance.put(`/parent`, parent);
        return response.data;
    } catch (error) {
        console.error("Error updating parent", error);
    }
}

export const deleteParent = async (id) => {
    try {
        const response = await instance.delete(`/parent/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting parent", error);
    }
}