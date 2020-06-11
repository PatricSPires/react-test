import axios from "axios";

const api = axios.create({
  baseURL: "http://api.geonames.org/",
});

export default api;
