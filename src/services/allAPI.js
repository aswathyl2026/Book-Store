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

export const getAllBookAPI=async (searchKey)=>{
    return await apiService("GET",`/all-books?search=${searchKey}`,{})
}

export const getAllUserBookAPI=async ()=>{
    return await apiService("GET",'/user-books',{})
}

export const getAllBoughtBookAPI=async ()=>{
    return await apiService("GET",'/bought-books',{})
}

export const deleteBookAPI=async (bookId)=>{
    return await apiService("DELETE",`/books/${bookId}`,{})
}

export const viewBookAPI=async (bookId)=>{
    return await apiService("GET",`/books/${bookId}`,{})
}

export const buyBookAPI=async (bookId)=>{
    return await apiService("PUT",`/books/${bookId}/buy`,{})
}