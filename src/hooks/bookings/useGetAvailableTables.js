import { useDispatch } from "react-redux";
import {
  setLoading,
  setError,
  clearError,
  setAvailableTables,
} from "../../redux/reducers/bookingSlice";
import { bookingService } from "../../api/services/bookingService";

export default function useGetAvailableTables() {
  const dispatch = useDispatch();

  const getAvailableTables = async (data) => {
    dispatch(setLoading(true));
    dispatch(clearError());

    try {
      const response = await bookingService.getAvailableTables(data);
      dispatch(setAvailableTables(response.data || []));
      return response;
    } catch (error) {
      // Unique error messages not handle by axios interceptors
      let errorMessage;

      if (error.response?.status === 400) {
        errorMessage = "Invalid date or time selected. Please check your input";
      } else if (error.response?.status === 404) {
        errorMessage = "No available tables found";
      } else {
        errorMessage = error.userMessage;
      }

      dispatch(setError(errorMessage));
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { getAvailableTables };
}
