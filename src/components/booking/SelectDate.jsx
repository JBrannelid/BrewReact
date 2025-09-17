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
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-white/30 rounded-xl">
          {/* Date picker from mui community component */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate ? dayjs(selectedDate) : null}
              onChange={handleDateChange}
              disablePast
              views={["day"]}
              openTo="day"
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
