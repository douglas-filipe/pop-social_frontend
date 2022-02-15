import axios from "axios";

const api = axios.create({
  baseURL: "http://pop-social-api.herokuapp.com",
});

export default api;
