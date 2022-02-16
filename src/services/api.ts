import axios from "axios";

const api = axios.create({
  baseURL: "https://pop-social-api.herokuapp.com",
});

export default api;
