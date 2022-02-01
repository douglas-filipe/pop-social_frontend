import axios from "axios";

const api = axios.create({
  baseURL: "http://52.67.153.57:3000",
});

export default api;
