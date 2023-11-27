import instance from "./BaseURL";

export const getAllDoctors = async () => {
    try {
        const response = await instance.get(`/doctor`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all doctors", error);
    }
}

export const getDoctorById = async (id) => {
    try {
        const response = await instance.get(`/doctor/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching doctor by id", error);
    }
}

export const createDoctor = async (doctor) => {
    try {
        const response = await instance.post(`/doctor`, doctor);
        return response.data;
    } catch (error) {
        console.error("Error creating doctor", error);
    }
}

export const updateDoctor = async (doctor) => {
    try {
        const response = await instance.put(`/doctor`, doctor);
        return response.data;
    } catch (error) {
        console.error("Error updating doctor", error);
    }
}

export const deleteDoctor = async (id) => {
    try {
        const response = await instance.delete(`/doctor/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting doctor", error);
    }
}

