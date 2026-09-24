// // import axios from "axios";

// // const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// // export const axiosInstance = axios.create({
// //   baseURL: BASE_URL,
// //   withCredentials: true, // send cookies with the request
// // });
// import axios from "axios";

// const BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5001/api"
//     : "https://YOUR-BACKEND-NAME.onrender.com/api";

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });


import axios from "axios";

const BASE_URL = import.meta.env.DEV
  ? "http://localhost:5001/api"
  : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});