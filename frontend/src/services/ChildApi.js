import instance from "./BaseURL";

export const getAllChildren = async () => {
    try {
        const response = await instance.get("/child");
        return response.data;
    } catch (error) {
        console.error("Error fetching all children", error);
    }
}

export const getChildById = async (id) => {
    try {
        const response = await instance.get(`/child/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching child by id", error);
    }
}

export const createChild = async (child) => {
    try {
        const response = await instance.post(`/child`, child);
        return response.data;
    } catch (error) {
        console.error("Error creating child", error);
    }
}

export const updateChild = async (child) => {
    try {
        const response = await instance.put(`/child`, child);
        return response.data;
    } catch (error) {
        console.error("Error updating child", error);
    }
}

export const deleteChild = async (id) => {
    try {
        const response = await instance.delete(`/child/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting child", error);
    }
}



