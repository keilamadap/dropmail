import axios from "axios";

export const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
export const MY_TOKEN = "A12312A3434d@3423$$";
export const apiUrl = `${CORS_ANYWHERE_URL}https://dropmail.me/api/graphql/${MY_TOKEN}`;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
