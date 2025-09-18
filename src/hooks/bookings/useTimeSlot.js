import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setError,
  clearError,
  setLoading,
} from "../../redux/reducers/bookingSlice";
import { bookingService } from "../../api/services/bookingService";

export const useTimeSlot = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTimeSlots = async () => {
      dispatch(setLoading(true));
      dispatch(clearError());

      try {
        const response = await bookingService.timeSlot();
        const formattedTimeSlots = (response.data || []).map((timeSlot) => {
          return timeSlot.substring(0, 5); // Format to HH:MM
        });
        setTimeSlots(formattedTimeSlots);
      } catch (error) {
        // Unique error messages not handle by axios interceptors
        let errorMessage;

        if (error.response?.status === 400) {
          errorMessage = "Unable to load time-slots. Please refresh the page";
        } else {
          errorMessage = error.userMessage;
        }

        dispatch(setError(errorMessage));
        return null;
      } finally {
        dispatch(setLoading(false));
      }
    };

    getTimeSlots();
  }, [dispatch]);

  return { timeSlots };
};
