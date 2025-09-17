import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  clearError,
  setBookingConfirmation,
} from "../../redux/reducers/bookingSlice";
import useCreateBooking from "../../hooks/bookings/useCreateBooking";
import useCreateCustomer from "../../hooks/customers/useCreateCustomer";
import { TextField } from "@mui/material";

const ConfirmBooking = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const {
    selectedDate,
    selectedTime,
    numberOfGuests,
    selectedTable,
    isLoading,
    error,
  } = useSelector((state) => state.booking);

  // Call api hooks
  const { createBooking } = useCreateBooking();
  const { createCustomer } = useCreateCustomer();

  // Destructure the useForm object from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (formData) => {
    dispatch(clearError());

    // Create customer first or return if failed
    const customerResponse = await createCustomer(formData);
    if (!customerResponse) {
      return;
    }

    // Extract customerId and prepare booking data
    const customerId = customerResponse.data;
    const bookingData = {
      customerId,
      tableId: selectedTable?.tableId,
      bookingDate: selectedDate,
      bookingTime: selectedTime,
      numberGuests: numberOfGuests,
    };

    // Create booking or return if failed
    const bookingResponse = await createBooking(bookingData);
    if (!bookingResponse) {
      return;
    }

    // On successful, store confirmation in Redux
    if (bookingResponse?.data) {
      dispatch(
        setBookingConfirmation({
          bookingId: bookingResponse.data.bookingId || bookingResponse.data,
          customer: formData,
        })
      );
      onSuccess?.();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4">
      {error && (
        <div className="bg-error-400/20 border border-error-600/30 text-primary-text-light p-4 rounded-lg font-semibold text-center mb-4">
          {error}
        </div>
      )}
      {/* Contact form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <fieldset disabled={isLoading}>
          <div>
            <TextField
              label="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              disabled={isLoading}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{ marginBottom: "13px" }}
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 100, message: "Max 100 characters" },
              })}
            />

            <TextField
              label="Phone Number"
              type="tel"
              fullWidth
              variant="outlined"
              size="small"
              disabled={isLoading}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
              sx={{ marginBottom: "13px" }}
              {...register("phoneNumber", {
                required: "Phone number is required",
                maxLength: {
                  value: 20,
                  message: "Max 20 characters",
                },
                pattern: {
                  value: /^[0-9+\-() ]+$/,
                  message: "Invalid phone number",
                },
              })}
            />

            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              size="small"
              type="email"
              disabled={isLoading}
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                maxLength: {
                  value: 100,
                  message: "Max 100 characters",
                },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !selectedTable}
            className="w-full p-2.5 mt-4 glass-btn-dark text-primary-text-light font-semibold 
                      disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Booking..." : "Confirm Booking"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ConfirmBooking;
