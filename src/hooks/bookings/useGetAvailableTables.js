import { bookingService } from "../../api/services/bookingService";

export default function useGetAvailableTables() {
  const getAvailableTables = async (data) => {
    const response = await bookingService.getAvailableTables(data);
    return response;
  };

  return { getAvailableTables };
}
