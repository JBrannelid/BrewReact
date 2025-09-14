import { RxCross2 } from "react-icons/rx";
import SelectDateTimeGuest from "./booking/SelectDateTimeGuest";
import SelectTable from "./booking/SelectTable";
import CustomerDetails from "./booking/CustomerDetails";
import BookingConfirmation from "./booking/BookingConfirmation";
import { useState, useEffect } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaRegCircleCheck } from "react-icons/fa6";

const Bookings = ({ showBookingModal, setShowBookingModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    // Step 1 - Select Date/Time/Guests
    { label: "Let's Get You Booked", component: <SelectDateTimeGuest /> },
    // Step 2 - Select avaible table
    { label: "Choose Your Table", component: <SelectTable /> },
    // Step 3 - Leave contact details av wrap up reservation
    { label: "Just a Few Details", component: <CustomerDetails /> },
    // Step 4 - Confirm booking, error handeling, booking.nr? api-call
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

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="relative glass-modal flex flex-col p-8 max-w-4xl w-full mx-4 min-h-80">
        {/* Show close btn on first index  */}
        {currentStep === 0 && (
          <button
            onClick={() => setShowBookingModal(false)}
            className="absolute top-4 right-4 glass-btn-light p-2 md:p-3 rounded-full border-2 border-white/15 hover:!translate-x-0 hover:!translate-y-0"
            aria-label="Close booking modal"
          >
            <RxCross2 className="w-5 h-5 md:w-6 md:h-6 text-primary-text-light" />
          </button>
        )}

        {/* Display current title and render components */}
        <section className="mb-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-primary-text-light">
            {steps[currentStep].label}
          </h1>
          <div>{steps[currentStep].component}</div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-auto pt-6 border-t border-white/10">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="glass-btn px-4 py-2 rounded disabled:opacity-0"
          >
            <GrPrevious
              className="w-5 h-5 md:w-6 md:h-6 text-primary-text-light"
              aria-label="Previously step"
            />
          </button>
          {currentStep < steps.length - 1 ? (
            <button onClick={nextStep} className="glass-btn px-4 py-2 rounded">
              <GrNext
                className="w-5 h-5 md:w-6 md:h-6 text-primary-text-light"
                aria-label="Next step"
              />
            </button>
          ) : (
            <button
              onClick={() => alert("Booking submitted!")}
              className="glass-btn px-4 py-2 rounded text-primary-text-light"
            >
              {/* Close booking modal after confirm */}
              <FaRegCircleCheck
                onClick={() => setShowBookingModal(false)}
                className="w-5 h-5 md:w-6 md:h-6 text-primary-text-light"
                aria-label="Close booking modal"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
