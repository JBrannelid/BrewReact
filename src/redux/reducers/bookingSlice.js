import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Select Date/Time/Guests
  selectedDate: "",
  selectedTime: "",
  numberOfGuests: 1,

  // Select available table
  availableTables: [],
  selectedTable: null,

  // Step 3 - Leave contact details and wrap up reservation
  // Step 4 - Confirm booking, error handling, booking.nr? api-call

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
    // Actions: Confirm booking

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
} = bookingSlice.actions;

export default bookingSlice.reducer;
