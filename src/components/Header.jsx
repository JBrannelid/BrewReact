import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";

const Header = () => {
  const [showContactMenu, setShowContactMenu] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactMenu(true);
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
          <Link
            to="/booking"
            className="glass-btn-dark text-primary-text-light font-medium"
          >
            Reservations
          </Link>
          <button
            onClick={handleContactClick}
            className="glass-btn-dark text-primary-text-light font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
      <Contact
        showContactMenu={showContactMenu}
        setShowContactMenu={setShowContactMenu}
      />
    </div>
  );
};

export default Header;
