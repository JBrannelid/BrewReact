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
      const errorMessage =
        error.userMessage || "Failed to load available tables";
      dispatch(setError(errorMessage));
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { getAvailableTables };
}
