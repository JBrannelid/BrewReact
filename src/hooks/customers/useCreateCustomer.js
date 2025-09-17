import { useDispatch } from "react-redux";
import {
  setError,
  clearError,
  setLoading,
} from "../../redux/reducers/bookingSlice";
import { customerService } from "../../api/services/customerService";

export default function useCreateCustomer() {
  const dispatch = useDispatch();

  const createCustomer = async (data) => {
    dispatch(setLoading(true));
    dispatch(clearError());

    try {
      const response = await customerService.create(data);
      return response;
    } catch (error) {
      const errorMessage = error.userMessage || "Failed to create customer";
      dispatch(setError(errorMessage));
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { createCustomer };
}
