import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../assets/image/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define navigation links with paths for better routing
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Privacy & Policy", path: "/privacy" },
    { name: "Refund and Cancellation", path: "/refund" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <div>
            <span className="font-bold text-sm text-blue-800 block">
              DISHAREAI WELFARE FOUNDATION
            </span>
            <p className="text-xs text-gray-600">CIN: U88900WB2024WB2024NPL269949</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-800 font-semibold"
                    : "text-gray-700 hover:text-blue-600 transition duration-300"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
