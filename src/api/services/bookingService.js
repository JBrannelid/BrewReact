import axiosInstance from "../config/axiosConfig";

export const bookingService = {
  get: () => axiosInstance.get("Bookings"),

  getAvailableTables: (data) =>
    axiosInstance.post("Bookings/available-tables", data),

  create: (data) => axiosInstance.post("Bookings", data),

  timeSlot: () => axiosInstance.get("Bookings/time-slots"),
};
