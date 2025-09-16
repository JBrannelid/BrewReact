import { bookingService } from "../../api/services/bookingService";

export default function useGetBookings() {
  const getBookings = async () => {
    const response = await bookingService.get();
    return response;
  };

  return { getBookings };
}
