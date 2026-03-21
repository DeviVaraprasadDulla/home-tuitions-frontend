import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/NavBar_logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300
  ${
    scrolled
      ? "bg-white/90 shadow-md border-b border-gray-200"
      : "bg-white/70 border-b border-gray-100"
  }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center">
        {/* Brand */}

        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Home Tuition"
            className={`transition-all duration-300 object-contain
            ${scrolled ? "h-8" : "h-10"}`}
          />

          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">
            Home<span className="text-blue-600">Tuition</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <DesktopLink to="/how-it-works" text="How it works" />
          <DesktopLink to="/mentors" text="Mentors" />
          <DesktopLink to="/contact" text="Contact" />
        </nav>

        {/* Mobile Toggle */}

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4 text-sm font-medium">
          <MobileLink
            to="/how-it-works"
            text="How it works"
            onClick={handleClose}
          />
          <MobileLink to="/mentors" text="Mentors" onClick={handleClose} />
          <MobileLink to="/contact" text="Contact" onClick={handleClose} />
        </div>
      )}
    </header>
  );
};

/* ===== Desktop Link ===== */

const DesktopLink = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative group transition ${
        isActive ? "text-blue-600" : "text-gray-700"
      }`
    }
  >
    {text}

    <span
      className="absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
      w-0 group-hover:w-full"
    />
  </NavLink>
);

/* ===== Mobile Link ===== */

const MobileLink = ({ to, text, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block transition ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-700"
      }`
    }
  >
    {text}
  </NavLink>
);

export default Navbar;
