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
  // Ex. Retreive token from Redux OR context Hook
  ();

// Global error handeling and logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError = error?.response?.status;
    let userMessage = "";

    if (!error.response) {
      console.log("Network error: ", error.response.data);
      userMessage = "Network error: Check your connection or firewall";
    } else {
      switch (apiError) {
        case 400:
          console.log("Bad Request: ", error.response.data);
          break;
        case 401:
        case 403:
          // Todo: If we have a login page with roles. Clear tokens and redirect to login
          console.log("Unauthorized: ", error.response.data);
          break;
        case 404:
          console.log("Not Found: ", error.response.data);
          break;
        case 500:
        case 502:
          console.log("Server Error: ", error.response.data);
          userMessage = "Internal server error. Please try again later";
          break;
        default:
          console.log("Unexpected error: ", error.response.data);
          userMessage = `Unexpected error (${apiError})`;
      }
    }
    error.userMessage = userMessage;

    return Promise.reject(error);
  }
);

export default axiosInstance;
