import axiosInstance from "../config/axiosConfig";

export const customerService = {
  getAll: () => axiosInstance.get("Customers"),

  getById: (id) => axiosInstance.get(`Customers/${id}`),

  create: (data) => axiosInstance.post("Customers", data),
};
