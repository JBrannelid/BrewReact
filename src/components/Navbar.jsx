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
      {/* Navigation Left (Desktop)*/}
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-2 lg:px-20 bg-transparent">
        <ul className="hidden md:flex md:gap-3 lg:gap-7 font-semibold">
          <li>
            <Link to="/" className="text-primary-text-light glass-btn-dark p-3">
              Home
            </Link>
          </li>
          <li>
            <a
              href="#About"
              className="text-primary-text-light glass-btn-dark p-3"
            >
              About
            </a>
          </li>
          <li>
            <a
              href={import.meta.env.VITE_PUBLIC_WEB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text-light glass-btn-dark p-3"
            >
              Menu
            </a>
          </li>
        </ul>
        {/* Navigation Middle (Desktop) */}
        <Link to="/">
          <img
            src={assets.logo}
            className="h-30 md:mr-16 lg:mr-40"
            alt="Brew Café Logo"
          />
        </Link>

        {/* Navigation Right (Desktop) */}
        <Link
          to="/login"
          className="hidden md:block glass-btn-dark text-primary-text-light font-medium"
        >
          Log In
        </Link>
        {/* Action: Open nav menu */}
        <CiMenuFries
          className="block md:hidden w-10 h-10 text-primary-text-light cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </nav>
      {/* Mobile menu */}
      <nav
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-background translate-all duration-200 ease-in`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          {/* Action: Close nav menu */}
          <RxCross2
            className="w-10 h-10"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-semibold">
          <li className="px-4 py-2 rounded-full inline-block text-primary-text-dark">
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              Home
            </Link>
          </li>
          <li className="px-4 py-2 rounded-full inline-block text-primary-text-dark">
            <a href="#About" onClick={() => setShowMobileMenu(false)}>
              About
            </a>
          </li>
          <li className="px-4 py-2 rounded-full inline-block text-primary-text-dark">
            <Link to="/booking" onClick={() => setShowMobileMenu(false)}>
              Book Table
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
