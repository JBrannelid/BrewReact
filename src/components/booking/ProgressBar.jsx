import { Stepper, Step, StepLabel, Stack } from "@mui/material";
import { FiUsers, FiCalendar, FiClock } from "react-icons/fi";

// Custom Step Icon Component
const CustomStepIcon = ({ active, completed, icon }) => (
  <div
    className={`progress-step-icon ${
      completed ? "completed" : active ? "active" : "inactive"
    }`}
  >
    {icon}
  </div>
);

const ProgressBar = ({
  currentStep,
  selectedDate,
  selectedTime,
  numberOfGuests,
}) => {
  // step 1-3 is defined. This steps is mapped to progress bar
  const progressSteps = [
    {
      label: "Guests",
      info: numberOfGuests || "--",
      icon: <FiUsers size={18} />,
      completed: currentStep > 0,
      active: currentStep === 0,
    },
    {
      label: "Date",
      info: selectedDate
        ? new Date(selectedDate).toLocaleDateString("sv-SE", {
            day: "numeric",
            month: "short",
          })
        : "--",
      icon: <FiCalendar size={18} />,
      completed: currentStep > 1,
      active: currentStep === 1,
    },
    {
      label: "Time",
      info: selectedTime || "--",
      icon: <FiClock size={18} />,
      completed: currentStep > 2,
      active: currentStep === 2,
    },
  ];

  return (
    <Stack className="flex-1 mx-4">
      <Stepper activeStep={currentStep} orientation="horizontal">
        {progressSteps.map((step, index) => (
          <Step key={index} completed={step.completed}>
            <StepLabel
              slots={{
                stepIcon: () => (
                  <CustomStepIcon
                    active={step.active}
                    completed={step.completed}
                    icon={step.icon}
                  />
                ),
              }}
            >
              <div className="text-center">
                <div className="text-xs font-medium text-white">
                  {step.label}
                </div>
                <div className="text-xs text-white/70 mt-0.5 font-semibold">
                  {step.info}
                </div>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default ProgressBar;
