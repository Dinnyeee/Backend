import instance from "./BaseURL";

export const getAllFamilies = async () => {
    try {
        const response = await instance.get(`/family`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all families", error);
    }
}

export const getFamilyById = async (id) => {
    try {
        const response = await instance.get(`/family/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching family by id", error);
    }
}

export const createFamily = async (family) => {
    try {
        const response = await instance.post(`/family`, family);
        return response.data;
    } catch (error) {
        console.error("Error creating family", error);
    }
}

export const updateFamily = async (family) => {
    try {
        const response = await instance.put(`/family`, family);
        return response.data;
    } catch (error) {
        console.error("Error updating family", error);
    }
}

export const deleteFamily = async (id) => {
    try {
        const response = await instance.delete(`/family/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting family", error);
    }
}