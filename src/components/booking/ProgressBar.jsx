import { HiUsers, HiCalendar, HiClock } from "react-icons/hi2";
import { useSelector } from "react-redux";

const ProgressBar = ({ currentStep, totalSteps = 3 }) => {
  // Get necessary booking details from Redux
  const { selectedDate, selectedTime, numberOfGuests } = useSelector(
    (state) => state.booking
  );

  const stepIcons = [
    HiUsers, // Step 0
    HiCalendar, // Step 1
    HiClock, // Step 2
  ];

  // Display data for each step
  const displayData = [
    // Step 0
    numberOfGuests > 0 ? `${numberOfGuests}` : null,
    // Step 1
    selectedDate
      ? // Format date to "DD MMM"
        new Date(selectedDate).toLocaleDateString("sv-SE", {
          month: "short",
          day: "numeric",
        })
      : null,
    // Step 2
    selectedTime || null,
  ];

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-3">
      {Array.from({ length: totalSteps }, (_, index) => {
        const Icon = stepIcons[index];
        const isCurrentStep = index === currentStep;
        const isCompletedStep = index < currentStep;
        const stepInfo = displayData[index];

        return (
          <div key={index} className="flex items-center">
            {/* Step container with icon and info */}
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div
                className={`
                  relative flex items-center justify-center 
                  w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full transition-all duration-300
                  ${
                    isCurrentStep
                      ? "bg-primary-text-light transform scale-120"
                      : isCompletedStep
                        ? "bg-primary-text-light/70"
                        : "bg-primary-text-light/20"
                  }
                `}
              >
                <Icon
                  className={`
                    w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300
                    ${isCurrentStep ? "text-black" : "text-primary-text-light"}
                  `}
                />
              </div>

              {/* Step information from Redux */}
              {stepInfo && (
                <div className="mt-1 text-xs sm:text-sm text-primary-text-light/80 font-medium">
                  {stepInfo}
                </div>
              )}
            </div>

            {/* Line divider */}
            {index < totalSteps - 1 && (
              <div
                className={`
                  w-4 sm:w-6 h-0.5 mx-2 sm:mx-3 "}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
