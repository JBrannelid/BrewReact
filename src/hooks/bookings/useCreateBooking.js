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
      // Unique error messages not handle by axios interceptors
      let errorMessage;

      if (error.response?.status === 400) {
        errorMessage = "Invalid booking details. Please check your input";
      } else if (error.response?.status === 409) {
        errorMessage =
          "The time-slot is no longer available. Please select another time";
      } else {
        errorMessage = error.userMessage;
      }

      dispatch(setError(errorMessage));
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { createBooking };
}
