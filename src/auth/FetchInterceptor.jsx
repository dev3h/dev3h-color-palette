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
service.interceptors.request.use(
  (config) => {
    let userAuth = localStorage.getItem("persist:userAuth");
    if (userAuth && typeof userAuth === "string") {
      userAuth = JSON.parse(userAuth);
      const accessToken = JSON.parse(userAuth?.token);
      if (accessToken) {
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };
        return config;
      }
    }

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => {
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
