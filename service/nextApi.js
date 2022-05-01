import {axiosClientNext, axiosClientBackend} from "./axiosClient";

export const loginApi = (data) => {
    return axiosClientNext.post('/api/login', data);
} 