import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#ffffff",
          },
          "& label.Mui-focused": {
            color: "#ffffff",
          },
          "& .MuiInputBase-input": {
            color: "#ffffff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#ffffff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff",
            },
          },
          "& .MuiFormHelperText-root": {
            color: "#ffcccc",
          },
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "& .MuiTypography-root": {
            fontSize: "1.2rem",
            color: "#ffffff",
          },
          "& .MuiPickersDay-root": {
            fontSize: "1.1rem",
            color: "#ffffff",
          },
          "& .MuiPickersArrowSwitcher-root svg": {
            fontSize: "2rem",
            color: "#ffffff",
          },
          "& .MuiButtonBase-root": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
