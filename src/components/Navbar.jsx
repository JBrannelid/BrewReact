import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Prevent background scrolling when mobile menu is open
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* Navigation (Desktop) */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-2 lg:px-20 bg-transparent">
        {/* Logo*/}
        <Link to="/">
          <img src={assets.logo} className="h-30 " alt="Brew Café Logo" />
        </Link>
        <ul className="hidden md:flex md:gap-3 lg:gap-7 font-semibold">
          <li className="list-none hidden md:block">
            <a
              href={import.meta.env.VITE_PUBLIC_WEB}
              // Open up a new browser tab
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text-light glass-btn-dark p-3 px-5"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="text-primary-text-light glass-btn-dark p-3"
            >
              About
            </a>
          </li>
        </ul>
        {/* Action: Open nav menu */}
        <CiMenuFries
          className="block md:hidden w-10 h-10 text-primary-text-light cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </nav>
      {/* Navigation (Mobile) */}
      <nav
        className={`md:hidden fixed top-0 bottom-0 right-0 w-1/2 max-h-10/12
          overflow-hidden bg-white/10 backdrop-blur-sm rounded-l-2xl border-2 border-white/20 shadow-2xl
          transition-transform duration-200 ease-in
          ${showMobileMenu ? "translate-x-0" : "translate-x-full"}
          ${!showMobileMenu && "pointer-events-none"}`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          {/* Action: Close nav menu */}
          <button
            onClick={() => setShowMobileMenu(false)}
            className="absolute top-5 right-4 glass-btn-light p-2 md:p-3 rounded-full border border-white/15"
            aria-label="Close navigation menu"
          >
            <RxCross2 className="w-6 h-6 text-primary-text-light" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10 px-5 text-lg font-semibold">
          <li className="px-4 py-2 rounded-full inline-block text-primary-text-light">
            <Link
              to="/"
              onClick={() => setShowMobileMenu(false)}
              className="no-underline inline-block transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Home
            </Link>
          </li>

          <li className="px-4 py-2 rounded-full inline-block text-primary-text-light">
            <a
              href="#About"
              className="no-underline inline-block transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </a>
          </li>
          <li className="px-4 py-2 rounded-full inline-block text-primary-text-light">
            <a
              href={import.meta.env.VITE_PUBLIC_WEB}
              // Open up a new browser tab
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-block transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
