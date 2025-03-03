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

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* 🌟 Company Info */}
        <div>
          <h1 className="text-white text-3xl font-bold">DISHAREAI</h1>
          <p className="mt-3 text-gray-400 text-sm">
            Empowering your financial growth with secure, accessible loan solutions.
          </p>
        </div>

        {/* 🔗 Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "Loans", "About", "Contact", "Terms & Conditions", "Loan Services"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaMapMarkerAlt className="text-yellow-400 text-lg" />
              <span>Amsherpur, Arabpur, Nadia, 741122</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaPhoneAlt className="text-yellow-400 text-lg" />
              <span>+91 6294385793 | +91 9429694155</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaEnvelope className="text-yellow-400 text-lg" />
              <span>dishareaiwelfarefoundation@gmail.com</span>
            </div>
          </div>
        </div>

        {/* 🌍 Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {[
              { href: "https://facebook.com", icon: FaFacebookF, bg: "bg-blue-600" },
              { href: "https://twitter.com", icon: FaTwitter, bg: "bg-blue-400" },
              { href: "https://linkedin.com", icon: FaLinkedinIn, bg: "bg-blue-700" },
              { href: "https://instagram.com", icon: FaInstagram, bg: "bg-gradient-to-r from-pink-500 to-orange-400" },
            ].map(({ href, icon: Icon, bg }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform transform hover:scale-110 ${bg} shadow-md`}
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 📄 Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DISHAREAI Welfare Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
