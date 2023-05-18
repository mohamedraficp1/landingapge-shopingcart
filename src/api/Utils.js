import axios from "axios";
import { API_HEADER, BASE_URL } from "./Config";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  headers: API_HEADER,
});

const getData = async (url) => {
  try {
    const res = await api.get(url);
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response);
    } else if (error.message) {
      return Promise.reject(error.message);
    }
  }
};

const postData = async (url, body) => {
  try {
    const res = await api.post(url, body);
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response);
    } else if (error.message) {
      return Promise.reject(error.message);
    }
  }
};

export { getData, postData, api };
