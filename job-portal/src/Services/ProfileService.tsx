import axios from "axios";
const base_url = "http://localhost:8080/api/v1/profiles/"

export const getProfile = async (id: number) => {
    try {
        const res = await axios.get(`${base_url}get/${id}`);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
};


export const updateProfile = async (profile: any) => {
    try {
        const res = await axios.put(`${base_url}update`, profile);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
};