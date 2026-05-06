import apiService from "../api/apiService";

export const registerAPI=async (userData)=>{
    return await apiService("POST","/register",userData)
}

export const loginAPI=async (userData)=>{
    return await apiService("POST","/login",userData)
}


export const googleLoginAPI=async (userData)=>{
    return await apiService("POST","/google-login",userData)
}

export const userEditAPI=async (userId,userData)=>{
    return await apiService("PUT",`/user/${userId}`,userData)
}


export const bookUploadAPI=async (bookData)=>{
    return await apiService("POST",'/books',bookData)
}


export const getHomeBookAPI=async ()=>{
    return await apiService("GET",'/home-books',{})
}