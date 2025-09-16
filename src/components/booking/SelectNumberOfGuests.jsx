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
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <div className="flex items-center justify-center space-x-12 mb-12">
        {/* Decrement Btn */}
        <button
          onClick={handleDecrement}
          disabled={numberOfGuests <= 1}
          className="border-2 text-primary-text-light/40 rounded-full p-2"
          aria-label="Decrease number of guests"
        >
          <HiMinus className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary-text-light" />
        </button>

        {/* Guest Count Display */}
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text-light">
          {numberOfGuests}
        </div>

        {/* Increment Btn */}
        <button
          onClick={handleIncrement}
          disabled={numberOfGuests >= 8}
          className="border-2 text-primary-text-light/40 rounded-full p-2"
          aria-label="Increase number of guests"
        >
          <HiPlus className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary-text-light" />
        </button>
      </div>

      {/* Contact Info for Larger Groups */}
      <p className="text-primary-text-light/70 text-center text-sm max-w-md">
        For groups larger than 8 people, please contact the café directly
      </p>
    </div>
  );
};

export default SelectNumberOfGuests;
