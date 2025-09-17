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

// Global responses and errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError = error?.response?.status;
    let userMessage = "An unexpected error occurred.";

    if (!error.response) {
      userMessage = "Network error: Could not connect to server.";
    } else {
      switch (apiError) {
        case 400:
          userMessage = "Bad request. Please check your input.";
          break;
        case 401:
        case 403:
          // Todo: If we have a login page with roles. Clear tokens and redirect to login
          console.log("Unauthorized");
          break;
        case 404:
          window.location.href = "/notFound";
          break;
        case 500:
        case 502:
          userMessage = "Server error. Please try again later.";
          break;
        default:
          userMessage = `Unexpected error (${apiError})`;
      }
    }
    error.userMessage = userMessage;

    return Promise.reject(error);
  }
);

export default axiosInstance;
