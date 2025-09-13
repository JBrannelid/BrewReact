import axios from "axios";

// Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your_token",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request
  .use
  // Retreive token from Redux OR context Hook
  ();

// Log global responses and errors
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    const status = error?.response?.status;

    switch (status) {
      case 400:
        console.log("Invalid data provided");
        break;
      case 401:
        console.log("Unauthorized: Please log in again");
        // Clear stored tokens and redirect to login
        break;
      case 404:
        console.log("The resource ypu searh for was not found");
        break;
      case 500:
        console.log("Internal Server Error");
        break;
      case 502:
        console.log("Server unavailable");
        break;
      default:
        if (!error.response) {
          console.log("Network Error");
        } else {
          console.log(`HTTP Error ${status}: ${error.message}`);
        }
    }
    throw error;
  }
);

export default axiosInstance;
