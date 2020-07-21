import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});
