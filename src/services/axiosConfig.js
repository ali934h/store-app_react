import axios from "axios";
const BASE_URL = "https://fakestoreapi.com/";
const api = axios.create({ baseURL: BASE_URL });
api.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default api;
