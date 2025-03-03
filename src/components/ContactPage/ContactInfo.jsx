import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-8">Get in Touch</h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-[#1a237e] text-2xl" />
          <span className="text-lg text-gray-700">Jamsherpur , Arabpur , Nadia , 741122</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-[#1a237e] text-2xl" />
          <span className="text-lg text-gray-700">+91 6294385793</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-[#1a237e] text-2xl" />
          <span className="text-lg text-gray-700"> +91 9429694155</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-[#1a237e] text-2xl" />
          <span className="text-lg text-gray-700">dishareaiwelfarefoundation@gmail.com</span>
        </div>
      </div>
      <div className="mt-10">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {[
            { icon: FaFacebookF, bg: "bg-blue-600" },
            { icon: FaTwitter, bg: "bg-blue-400" },
            { icon: FaLinkedinIn, bg: "bg-blue-700" },
            { icon: FaInstagram, bg: "bg-gradient-to-r from-pink-500 to-orange-400" },
          ].map(({ icon: Icon, bg }, index) => (
            <button
              key={index}
              className={`${bg} w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform transform hover:scale-110`}
            >
              <Icon className="text-xl" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
