import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Store Date/Time/Guests
  selectedDate: "",
  selectedTime: "",
  numberOfGuests: 1,

  // Store available table
  availableTables: [],
  selectedTable: null,

  // Store customer contact details for reservation
  Name: "",
  PhoneNumber: "",
  Email: "",

  // Store booking confirmation details
  bookingConfirmation: null,

  // UI state
  isLoading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // Actions: Date/Time/Guests
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
    setNumberOfGuests: (state, action) => {
      state.numberOfGuests = action.payload;
    },

    // Actions: available table
    setAvailableTables: (state, action) => {
      state.availableTables = action.payload;
    },
    setSelectedTable: (state, action) => {
      state.selectedTable = action.payload;
    },

    // Actions: Leave contact details and wrap up reservation
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.PhoneNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },

    // Actions: Booking confirmation
    setBookingConfirmation: (state, action) => {
      state.bookingConfirmation = action.payload;
    },

    // UI state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },

    // Reset booking state
    resetBooking: (state) => {
      return initialState;
    },
  },
});

export const {
  setSelectedDate,
  setSelectedTime,
  setNumberOfGuests,
  setAvailableTables,
  setSelectedTable,
  setLoading,
  setError,
  clearError,
  resetBooking,
  setName,
  setPhoneNumber,
  setEmail,
  setBookingConfirmation,
} = bookingSlice.actions;

export default bookingSlice.reducer;
