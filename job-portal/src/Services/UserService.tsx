import axios from "axios";

const base_url = "http://localhost:8080/api/v1/users/";

export const registerUser = async (user: any) => {
    try {
        const res = await axios.post(`${base_url}register`, user);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
};

export const loginUser = async (user: any) => {
    try {
        const res = await axios.post(`${base_url}login`, user);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
};

export const sendOtp = async (email: any) => {
    try {
        const res = await axios.post(`${base_url}sendOtp/${email}`);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
};

export const verifyOtp = async (email: any, otp: any) => {
    try {
        const result = await axios.get(`${base_url}verifyOtp/${email}/${otp}`);
        return result.data; // Return the data from the response
    } catch (error) {
        throw error; // If an error occurs, throw it
    }
};

export const changePassword = async(email:any, password:any)=>{
    try{
        const res = await axios.post(`${base_url}changePass`,{email,password})
        return res.data
    }catch(error){
        throw error;
    }
}