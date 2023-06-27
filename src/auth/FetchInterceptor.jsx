import axios from "axios";
import { notification } from "antd";
// import { AUTH_TOKEN } from "../redux/constants/Auth";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
});

// Config
// const ENTRY_ROUTE = "/auth/login";
// // const TOKEN_PAYLOAD_KEY = "authorization";
// const TOKEN_HEADER_KEY = "x-access-token";
// const PUBLIC_REQUEST_KEY = "public-request";

// API Request interceptor
// service.interceptors.request.use(
//   (config) => {
//     const jwtToken = localStorage.getItem(AUTH_TOKEN);

//     if (jwtToken) {
//       config.headers[TOKEN_HEADER_KEY] = jwtToken;
//     }

//     if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
//       window.location.reload();
//     }

//     return config;
//   },
//   (error) => {
//     // Do something with request error here
//     notification.error({
//       message: "Error",
//     });
//     Promise.reject(error);
//   }
// );

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response?.data;
  },
  (error) => {
    let notificationParam = {
      message: "",
    };
    console.log(error);

    // Remove token and redirect
    notificationParam.message = error?.response?.data?.mes || error?.message;

    notification.error(notificationParam);

    return Promise.reject(error);
  }
);

export default service;
