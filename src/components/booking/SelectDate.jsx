import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate, clearError } from "../../redux/reducers/bookingSlice";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const SelectDate = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.booking);

  const handleDateChange = (date) => {
    if (!date) return;
    const isoDate = date.format("YYYY-MM-DD");
    dispatch(setSelectedDate(isoDate));
    dispatch(clearError());
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <div className="flex items-center justify-center space-x-12 mb-12">
        <div className="bg-white/30 p-6 rounded-2xl">
          {/* Date picker from mui community component */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate ? dayjs(selectedDate) : null}
              onChange={handleDateChange}
              disablePast
              sx={{
                // Apply white color to calendar
                color: "#ffffff",

                // Apply white color to all elements
                "& *": {
                  color: "#ffffff !important",
                },

                // Increase font size on header
                "& .MuiTypography-root": {
                  fontSize: "1.2rem",
                },

                // Increase font size on daycells
                "& .MuiPickersDay-root": {
                  fontSize: "1.1rem",
                },

                // Increase font size on navigation btns
                "& .MuiPickersArrowSwitcher-root": {
                  "& svg": {
                    fontSize: "2rem",
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
