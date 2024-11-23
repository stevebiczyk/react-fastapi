import axios from "axios";

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Export the axios instance
export default api;
