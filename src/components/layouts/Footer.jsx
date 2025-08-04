import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
  {name:"Privacy Policy",path:"/privacy"},
  { name: "E-Mandate Cancellation & Refund Policy", path: "/refund" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h1 className="text-white text-3xl font-bold">DISHAREAI WELFARE FOUNDATION</h1>
          <p className="mt-3 text-gray-400 text-sm">
            Empowering your financial growth with secure
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="hover:text-white transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaMapMarkerAlt className="text-yellow-400 text-lg" />
              <span>Bagchi, Jamsherpur, Arabpur, Nadia, 741122</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaPhoneAlt className="text-yellow-400 text-lg" />
              <span>+91 62943 85793 | +91 94296 94155</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaEnvelope className="text-yellow-400 text-lg" />
              <span>dishareaiwelfarefoundation@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DISHAREAI Welfare Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
