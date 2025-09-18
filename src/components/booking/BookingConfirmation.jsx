import { useSelector } from "react-redux";

const BookingConfirmation = () => {
  const { bookingConfirmation } = useSelector((state) => state.booking);

  return (
    <div className="flex flex-col items-center justify-center md:min-w-md max-w-lg mx-auto">
      <div className="flex items-center justify-center">
        <div className="p-4 lg:p-6 rounded-2xl text-center">
          {/* Title */}
          <p className="text-primary-text-light text-xl">
            Your reservation has been created successfully.
          </p>
          {/* Booking number*/}
          <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-4">
            <p className="text-primary-text-light text-lg font-semibold mb-2">
              Booking Number:
            </p>
            <p className="text-primary-text-light text-2xl font-bold">
              {bookingConfirmation?.bookingId || "Not available"}
            </p>

            {/* Customer Details */}
            {bookingConfirmation?.customer && (
              <div className="text-sm ">
                <p className="mb-1 text-primary-text-light/80 ">
                  {bookingConfirmation.customer.name}
                </p>
                <p className="mb-1 text-primary-text-light/80 ">
                  {bookingConfirmation.customer.email}
                </p>
                <p className="text-primary-text-light/80">
                  {bookingConfirmation.customer.phoneNumber}
                </p>
              </div>
            )}
          </div>
          <p className="text-primary-text-light/80 text-md max-w-sm mx-auto">
            Please check your email for details or save the information above
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
