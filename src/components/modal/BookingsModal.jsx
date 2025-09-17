import SelectDate from "../booking/SelectDate";
import SelectNumberOfGuests from "../booking/SelectNumberOfGuests";
import SelectTime from "../booking/SelectTime";
import ConfirmBooking from "../booking/ConfirmBooking";
import SelectTable from "../booking/SelectTable";
import BookingConfirmation from "../booking/BookingConfirmation";
import { useState, useEffect } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { resetBooking } from "../../redux/reducers/bookingSlice";
import useGetAvailableTables from "../../hooks/bookings/useGetAvailableTables";
import ProgressBar from "../booking/ProgressBar";

const Bookings = ({ showBookingModal, setShowBookingModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const { selectedDate, selectedTime, numberOfGuests, selectedTable, error } =
    useSelector((state) => state.booking);
  const { getAvailableTables } = useGetAvailableTables();

  const steps = [
    // Step 0 - Select Number Of Guests
    { label: "How many are you?", component: <SelectNumberOfGuests /> },
    // Step 1 - Select Date
    { label: "Which day would you like to come?", component: <SelectDate /> },
    // Step 2 - Select Time
    { label: "What time would you like to come?", component: <SelectTime /> },
    // Step 3 - Find available tables
    { label: "Find available table", component: <SelectTable /> },
    // Step 4 - Leave contact details and wrap up reservation
    {
      label: "Just a few details",
      component: <ConfirmBooking onSuccess={() => setCurrentStep(5)} />,
    },
    // Step 5 - Confirm bookinG and display a booking.nr?
    { label: "Here's Your Confirmation", component: <BookingConfirmation /> },
  ];

  useEffect(() => {
    // Prevent background scrolling when modal is open
    if (showBookingModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBookingModal]);

  if (!showBookingModal) return null;

  // Check if current step is valid for nav
  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return numberOfGuests;
      case 1:
        return selectedDate;
      case 2:
        return selectedTime;
      case 3:
        return selectedTable;
      default:
        return true;
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = async () => {
    if (!isStepValid()) {
      return;
    }

    // Get available tables when going to step 3 - Now using consistent hook pattern
    if (currentStep === 2) {
      await getAvailableTables({
        bookingDate: selectedDate,
        bookingTime: selectedTime,
        numberGuests: numberOfGuests,
      });

      // Don't proceed if there was an error
      if (error) {
        return;
      }
    }

    // Move to next step if not last step
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Reset booking state and close modal
  const handleClose = () => {
    dispatch(resetBooking());
    setCurrentStep(0);
    setShowBookingModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="relative glass-modal flex flex-col p-8">
        {/* Show close btn on first and last index  */}
        {(currentStep === 0 || currentStep === 5) && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 glass-btn-light p-2 md:p-3 rounded-full border-2 border-white/15 hover:!translate-x-0 hover:!translate-y-0"
            aria-label="Close booking modal"
          >
            <RxCross2 className="w-4 h-4 lg:w-5 lg:h-5 text-primary-text-light" />
          </button>
        )}

        {/* Display current title and render components */}
        <section className="mb-4">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center mb-10 text-primary-text-light">
            {steps[currentStep].label}
          </h1>
          <div>{steps[currentStep].component}</div>
        </section>

        {/* Navigation Buttons with Progress Bar */}
        <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/10">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            disabled={currentStep === 0 || currentStep === 5}
            className="px-4 py-2 rounded disabled:opacity-0 transition-opacity duration-200"
          >
            <GrPrevious
              className="w-5 h-5 md:w-6 md:h-6 text-primary-text-light"
              aria-label="Previous step"
            />
          </button>

          {/* Progress Bar (From mui) in Center */}
          <ProgressBar
            currentStep={currentStep}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            numberOfGuests={numberOfGuests}
          />

          {/* Next Button */}
          {currentStep < 4 && isStepValid() ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 rounded transition-transform duration-200 hover:scale-110"
            >
              <GrNext
                className="w-5 h-5 md:w-6 md:h-6 text-primary-text-light"
                aria-label="Next step"
              />
            </button>
          ) : (
            <div className="w-10 h-10"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
