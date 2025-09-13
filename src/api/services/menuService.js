import axiosInstance from "../config/axiosConfig";

export const menuService = {
  get: () => axiosInstance.get("MenuItems"),

  getById: (id) => axiosInstance.get(`MenuItems/${id}`),

  create: (data) => axiosInstance.post("MenuItems", data),

  update: (id, data) => axiosInstance.put(`MenuItems/${id}`, data),

  delete: (id) => axiosInstance.delete(`MenuItems/${id}`),
};
