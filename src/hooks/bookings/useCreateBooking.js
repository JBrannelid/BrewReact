import { bookingService } from "../../api/services/bookingService";

export default function useCreateBooking() {
  const createBooking = async (data) => {
    const response = await bookingService.create(data);
    return response;
  };

  return { createBooking };
}
