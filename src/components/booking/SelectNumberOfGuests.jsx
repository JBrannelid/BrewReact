import { useSelector, useDispatch } from "react-redux";
import {
  setNumberOfGuests,
  clearError,
} from "../../redux/reducers/bookingSlice";
import { HiMinus, HiPlus } from "react-icons/hi2";

const SelectNumberOfGuests = () => {
  const dispatch = useDispatch();
  const { numberOfGuests } = useSelector((state) => state.booking);

  const handleIncrement = () => {
    if (numberOfGuests < 8) {
      dispatch(setNumberOfGuests(numberOfGuests + 1));
      dispatch(clearError());
    }
  };

  const handleDecrement = () => {
    if (numberOfGuests > 1) {
      dispatch(setNumberOfGuests(numberOfGuests - 1));
      dispatch(clearError());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <div className="flex items-center justify-center space-x-10 mb-10">
        {/* Decrement Btn */}
        <button
          onClick={handleDecrement}
          disabled={numberOfGuests <= 1}
          className="border-2 text-primary-text-light/40 rounded-full p-2"
          aria-label="Decrease number of guests"
        >
          <HiMinus className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-text-light" />
        </button>

        {/* Guest Count Display */}
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text-light">
          {numberOfGuests}
        </div>

        {/* Increment Btn */}
        <button
          onClick={handleIncrement}
          disabled={numberOfGuests >= 8}
          className="border-2 text-primary-text-light/40 rounded-full p-2"
          aria-label="Increase number of guests"
        >
          <HiPlus className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-text-light" />
        </button>
      </div>

      {/* Contact Info for Larger Groups */}
      <p className="text-primary-text-light/80 text-center text-sm max-w-md">
        For groups larger than 8 people, please contact the café directly
      </p>
    </div>
  );
};

export default SelectNumberOfGuests;
