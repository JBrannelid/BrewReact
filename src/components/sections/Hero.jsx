import { useState } from "react";
import Navbar from "../layout/Navbar";
import Contact from "../modal/ContactModal";
import Bookings from "../modal/BookingsModal";

const Hero = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  const handleBookingClick = (e) => {
    e.preventDefault();
    setShowBookingModal(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/headerImage3.jpg')" }}
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-primary-text-light">
        <h2 className="text-5xl sm:text-6xl md:text-7xl inline-block max-w-3xl font-semibold pt-20">
          Book Your Seat for the Perfect Brew
        </h2>
        <div className="space-x-6 mt-16">
          <button
            onClick={handleBookingClick}
            className="glass-btn-dark text-primary-text-light font-medium"
          >
            Reservations
          </button>
          <button
            onClick={handleContactClick}
            className="glass-btn-dark text-primary-text-light font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
      <Contact
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
      <Bookings
        showBookingModal={showBookingModal}
        setShowBookingModal={setShowBookingModal}
      />
    </div>
  );
};

export default Hero;
