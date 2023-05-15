import axios from "axios";
import { API_HEADER, BASE_URL } from "./apiConfig";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  headers: API_HEADER,
});

API.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Request sent", config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

/**
 * Interceptor will not filter the data returned from the server for the given black listed urls
 */
const responseDataFilterBlackList = [];

API.interceptors.response.use(
  function (response) {
    const showFullResponse = responseDataFilterBlackList.includes(
      response.config.url
    );
    return showFullResponse ? response : response.data;
  },
  function (error) {
    let res = error?.response?.data; // This is the api response error object
    if (res) return Promise.reject(res);
    return Promise.reject(new Error("Something went wrong"));
  }
);

export default API;
