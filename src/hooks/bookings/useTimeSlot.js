import { useState, useEffect } from "react";
import { bookingService } from "../../api/services/bookingService";

export const useTimeSlot = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [error, setError] = useState(null); // Unic error state for Time-Slot hook

  useEffect(() => {
    const getTimeSlots = async () => {
      setError(null);
      try {
        const response = await bookingService.timeSlot();
        const formattedTimeSlots = (response.data || []).map((timeSlot) => {
          return timeSlot.substring(0, 5); // Format to HH:MM
        });
        setTimeSlots(formattedTimeSlots);
      } catch (error) {
        setError("Failed to load available time-slots");
      }
    };

    getTimeSlots();
  }, []);

  return { timeSlots, error };
};
