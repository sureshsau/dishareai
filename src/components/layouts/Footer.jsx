import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Logo & About */}
        <div>
          <h1 className="text-white text-2xl font-bold">DISHAREAI</h1>
          <p className="mt-3 text-gray-400 text-sm">
            Empowering your financial growth with secure, accessible loan solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/loans" className="hover:text-white transition">
                Loans
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:text-white transition">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="/loan-services" className="hover:text-white transition">
                Loan Services
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">Email: info@dishareai.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 9876543210</p>
          <p className="text-gray-400 text-sm">Address: Mumbai, India</p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © 2025 DISHAREAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
