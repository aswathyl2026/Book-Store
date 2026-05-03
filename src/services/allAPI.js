import apiService from "../api/apiService";

export const registerAPI=async (userData)=>{
    return await apiService("POST","/register",userData)
}