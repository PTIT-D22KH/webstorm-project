import axios from "./axios.customize.js";


const createUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "api/v1/users";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phoneNumber: phoneNumber
    }
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (id, fullName, phoneNumber) => {
    const URL_BACKEND = `api/v1/users/${id}`;
    const data = {
        fullName: fullName,
        phoneNumber: phoneNumber
    }
    return axios.put(URL_BACKEND, data);
}
const deleteUserAPI = (id) => {
    const URL_BACKEND = `api/v1/users/${id}`;
    return axios.delete(URL_BACKEND);
}
const fetchAllUserAPI = (current, pageSize) => {
    const URL_BACKEND = `api/v1/users?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}
const handleUploadFile = (file, folder) => {
    const URL_BACKEND = "api/v1/file/upload";
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
        
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);
    return axios.post(URL_BACKEND, bodyFormData, config);
}
const updateUserAvatarAPI = (id, fullName, phoneNumber, avatar) => {
    const URL_BACKEND = `api/v1/users/${id}`;
    const data = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        avatar: avatar
    }
    return axios.put(URL_BACKEND, data);
}
const registerUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "api/v1/users/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phoneNumber: phoneNumber
    }
    return axios.post(URL_BACKEND, data);
}
const loginrAPI = (email, password) => {
    const URL_BACKEND = "api/v1/auth/login";
    const data = {
        email: email,
        password: password,
        // delay: 2000
    }
    return axios.post(URL_BACKEND, data);
}
export {
    createUserAPI,
    updateUserAPI,
    fetchAllUserAPI,
    deleteUserAPI,
    handleUploadFile,
    updateUserAvatarAPI,
    registerUserAPI,
    loginrAPI
}