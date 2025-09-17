import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#ffffff",
            backgroundColor: "transparent",
          },
          "& label.Mui-focused": {
            color: "#ffffff",
            backgroundColor: "transparent",
          },
          "& .MuiInputLabel-shrink": {
            backgroundColor: "transparent",
            padding: "0 4px",
          },
          "& .MuiInputBase-input": {
            color: "#ffffff",
            backgroundColor: "transparent",
            "&:-webkit-autofill": {
              WebkitBoxShadow:
                "0 0 0 1000px rgba(255, 255, 255, 0.05) inset !important",
              WebkitTextFillColor: "#ffffff !important",
              backgroundColor: "transparent !important",
              transition: "background-color 5000s ease-in-out 0s !important",
            },
            "&:-webkit-autofill:hover": {
              WebkitBoxShadow:
                "0 0 0 1000px rgba(255, 255, 255, 0.05) inset !important",
              WebkitTextFillColor: "#ffffff !important",
              transition: "background-color 5000s ease-in-out 0s !important",
            },
            "&:-webkit-autofill:focus": {
              WebkitBoxShadow:
                "0 0 0 1000px rgba(255, 255, 255, 0.05) inset !important",
              WebkitTextFillColor: "#ffffff !important",
              transition: "background-color 5000s ease-in-out 0s !important",
            },
            "&:-webkit-autofill:active": {
              WebkitBoxShadow:
                "0 0 0 1000px rgba(255, 255, 255, 0.05) inset !important",
              WebkitTextFillColor: "#ffffff !important",
              transition: "background-color 5000s ease-in-out 0s !important",
            },
            "&:-moz-autofill": {
              backgroundColor: "rgba(255, 255, 255, 0.05) !important",
              color: "#ffffff !important",
              boxShadow:
                "0 0 0 1000px rgba(255, 255, 255, 0.05) inset !important",
            },
            "&:-moz-autofill-preview": {
              backgroundColor: "rgba(255, 255, 255, 0.05) !important",
              color: "#ffffff !important",
            },
            "&:autofill": {
              backgroundColor: "rgba(255, 255, 255, 0.05) !important",
              color: "#ffffff !important",
              boxShadow:
                "0 0 0 1000px rgba(255, 255, 255, 0.05) inset !important",
            },
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff",
            },
          },
          "& .MuiFormHelperText-root": {
            color: "#ffcccc",
            backgroundColor: "transparent",
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
          "& .MuiPickersCalendarHeader-label": {
            color: "#ffffff",
          },
          "& .MuiPickersCalendarHeader-root": {
            "& .MuiButtonBase-root": {
              color: "#ffffff",
            },
          },
          "& .MuiPickersMonth-monthButton": {
            color: "#ffffff",
          },
          "& .MuiPickersYear-yearButton": {
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
    MuiStepper: {
      styleOverrides: {
        root: {
          background: "transparent",
          padding: 0,
          "& .progress-step-icon": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "2px solid",
            transition: "all 0.3s ease",
          },
          "& .progress-step-icon.completed": {
            backgroundColor: "#4ade80",
            borderColor: "#4ade80",
            color: "white",
          },
          "& .progress-step-icon.active": {
            backgroundColor: "white",
            borderColor: "white",
            color: "#1f2937",
          },
          "& .progress-step-icon.inactive": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.3)",
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiStepLabel-iconContainer": {
            paddingRight: 0,
            marginBottom: "8px",
          },
          "& .MuiStepLabel-labelContainer": {
            textAlign: "center",
            minWidth: "60px",
          },
        },
        label: {
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "#ffffff",
          "&.Mui-active": {
            color: "#ffffff",
          },
          "&.Mui-completed": {
            color: "#4ade80",
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          top: "20px",
          left: "calc(-50% + 20px)",
          right: "calc(50% + 20px)",
          "& .MuiStepConnector-line": {
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderTopWidth: 2,
            borderRadius: 1,
          },
          "&.Mui-completed .MuiStepConnector-line": {
            borderColor: "#4ade80",
          },
          "&.Mui-active .MuiStepConnector-line": {
            borderColor: "rgba(255, 255, 255, 0.6)",
          },
        },
      },
    },
  },
});

export default theme;
