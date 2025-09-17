import axiosInstance from "../config/axiosConfig";

export const customerService = {
  create: (data) => axiosInstance.post("Customers", data),
};
