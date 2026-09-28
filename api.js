import axios from "axios";

const API = axios.create({
  baseURL: "https://seraphic-events-back.onrender.com/api",
});

export default API;
