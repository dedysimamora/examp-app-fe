import {axiosClientBackend} from "./axiosClient";

export const getUserProfile = (token) => {
    return axiosClientBackend.get('/api/users/me', {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "authorization" : `Bearer ${token}`
          }
    });
} 