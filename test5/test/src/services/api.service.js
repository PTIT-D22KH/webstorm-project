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
const fetchAllUserAPI = () => {
    const URL_BACKEND = "api/v1/users";
    return axios.get(URL_BACKEND);
}
const handleUploadFile = (file, folder) => {
    const URL_BACKEND = "api/v1/file/upload";
    let config = {
        headers: {
            "upload-type": folder,
        }
    }
    return axios.post(URL_BACKEND, data, config);
}
export {
    createUserAPI,
    updateUserAPI,
    fetchAllUserAPI,
    deleteUserAPI
}