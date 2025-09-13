import { RxCross2 } from "react-icons/rx";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdSchedule } from "react-icons/md";

// We will accept background scrolling when contact modal is open
const Contact = ({ showContactModal, setShowContactModal }) => {
  if (!showContactModal) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      {/* Contact modal container */}
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 shadow-2xl p-8 max-w-md w-full mx-4">
        {/* Close Button */}
        <button
          onClick={() => setShowContactModal(false)}
          className="absolute top-4 right-4 glass-btn-light p-2 md:p-3 rounded-full border-2 border-white/15 hover:!translate-x-0 hover:!translate-y-0"
          aria-label="Close contact modal"
        >
          <RxCross2 className="w-6 h-6 text-primary-text-light" />
        </button>

        <div className="text-center text-primary-text-light">
          <h3 className="text-xl md:text-2xl font-bold font-heading mb-6 max-w-80 h-10">
            Contact Information
          </h3>

          <div className="space-y-4 text-left">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-primary-text-light  h-7 w-7" />
              <div>
                <p className="font-semibold text-lg md:text-xl text-primary-text-light">
                  Address
                </p>
                <p className="text-bold text-md md:text-lg text-primary-text-light">
                  Street 110, 100 10 Stockholm, Sweden
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <BsTelephone className="text-primary-text-light h-7 w-7" />

              <div>
                <p className="font-semibold text-lg md:text-xl text-primary-text-light">
                  Phone
                </p>
                <p className="text-bold text-md md:text-lg text-primary-text-light">
                  +46 123 45 67
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <MdOutlineAlternateEmail className="text-primary-text-light  h-7 w-7" />

              <div>
                <p className="font-semibold text-lg md:text-xl text-primary-text-light">
                  Email
                </p>
                <p className="text-bold text-md md:text-lg text-primary-text-light">
                  contact@brewcafe.se
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center space-x-4">
              <MdSchedule className="text-primary-text-light h-7 w-7" />

              <div>
                <p className="font-semibold text-lg md:text-xl text-primary-text-light">
                  Opening Hours
                </p>
                <p className="text-bold text-md md:text-lg text-primary-text-light">
                  Monday - Sunday
                </p>
                <p className="text-bold text-md md:text-lg text-primary-text-light">
                  08:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
