import axios from "axios";

const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

export default axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
