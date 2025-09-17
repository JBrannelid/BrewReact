import { useSelector, useDispatch } from "react-redux";
import { setSelectedTime, clearError } from "../../redux/reducers/bookingSlice";
import { useTimeSlot } from "../../hooks/bookings/useTimeSlot";

const SelectTime = () => {
  const dispatch = useDispatch();
  const { selectedTime, error, isLoading } = useSelector(
    (state) => state.booking
  );

  // Get Time-Slot from hook
  const { timeSlots } = useTimeSlot();

  // Redux state handlers
  const handleTimeChange = (e) => {
    dispatch(setSelectedTime(e.target.value));
    dispatch(clearError());
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-text-light"></div>
        <p className="text-primary-text-light ml-4 text-lg">
          Loading available times...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      {error && (
        <div className="bg-error-400/20 border border-error-600/30 text-primary-text-light p-4 rounded-lg font-semibold text-center mb-6">
          {error}
        </div>
      )}

      <div className="flex items-center justify-center space-x-12 mb-12">
        <div className="p-4 lg:p-6 rounded-2xl">
          {/* Time Selection */}
          <div className="space-y-4">
            <p className="block text-primary-text-light font-medium text-xl text-center">
              Select a perferred time
            </p>
            <select
              value={selectedTime}
              onChange={handleTimeChange}
              disabled={isLoading}
              className="w-full p-3 rounded-lg glass-modal text-primary-text-light focus:border-primary-text-light/70 focus:border-2 focus:outline-none min-w-48"
            >
              <option value="" className="text-primary-text-body">
                {isLoading ? "Loading times..." : "Choose time..."}
              </option>
              {timeSlots.map((timeSlot) => (
                <option
                  key={timeSlot}
                  value={timeSlot}
                  className="text-primary-text-body"
                >
                  {timeSlot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTime;
