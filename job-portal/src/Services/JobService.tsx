import axios from "axios";
const base_url = "http://localhost:8080/api/v1/jobs/"


export const postJob = async (job:any) => {
    try {
        const res = await axios.post(`${base_url}post`,job);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
};

export const getAllJobs = async()=>{
    try {
        const res = await axios.get(`${base_url}getAll`);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
}

export const getJob =async(id:any)=>{
    try {
        const res = await axios.get(`${base_url}get/${id}`);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
}

export const applyJob = async(id:any, applicant:any)=>{
    try {
        const res = await axios.post(`${base_url}apply/${id}`,applicant)
        return res;
    } catch (error) {
        throw error; 
    }
}

export const getJobPostedBy =async(id:any)=>{
    try {
        const res = await axios.get(`${base_url}postedBy/${id}`);
        return res.data; // Return the response data
    } catch (error) {
        throw error; // Handle any errors
    }
}

export const changeAppStatus = async(application:any)=>{
    try{
        const res = await axios.post(`${base_url}changeStatus`,application)
        return res;
    }catch(error){
        throw(error)
    }
}