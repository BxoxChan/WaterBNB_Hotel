import axios from "axios";

const Base_URL = "http://localhost:5000/app/";

const publicRequest = axios.create({
  baseURL: Base_URL,
});

const userRequest = axios.create({
  baseURL: Base_URL + "auth",
});
const bookingRequest = axios.create({
  baseURL: Base_URL + "booking",
});

export { publicRequest, userRequest, bookingRequest };
