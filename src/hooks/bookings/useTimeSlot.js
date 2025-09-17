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
        const errorMessage =
          error.userMessage || "Failed to load available time slots";
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
