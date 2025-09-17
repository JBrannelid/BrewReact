import { useDispatch } from "react-redux";
import {
  setLoading,
  setError,
  clearError,
} from "../../redux/reducers/bookingSlice";
import { bookingService } from "../../api/services/bookingService";

export default function useCreateBooking() {
  const dispatch = useDispatch();

  const createBooking = async (data) => {
    dispatch(setLoading(true));
    dispatch(clearError());

    try {
      const response = await bookingService.create(data);
      return response;
    } catch (error) {
      const errorMessage = error.userMessage || "Failed to create booking";
      dispatch(setError(errorMessage));
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { createBooking };
}
