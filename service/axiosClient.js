import axios from "axios";

export const axiosClientNext = axios.create({
  baseURL: ``,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axiosClientBackend = axios.create({
  baseURL: process.env.BACKEND_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjUwOTUzMzY3LCJleHAiOjE2NTM1NDUzNjd9.697XM4AFb3FOvwgHP9OXtHBXP2ihpfsokSB-ZI9tPOw"
  },
});

//   axiosClient.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       let res = error.response;
//       if (res.status == 401) {
//         window.location.href = “https://example.com/login”;
//       }
//       console.error(“Looks like there was a problem. Status Code: “ + res.status);
//       return Promise.reject(error);
//     }
//   );
