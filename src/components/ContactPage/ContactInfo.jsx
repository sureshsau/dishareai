import { 
    FaMapMarkerAlt, 
    FaPhoneAlt, 
    FaEnvelope, 
    FaFacebookF, 
    FaTwitter, 
    FaLinkedinIn, 
    FaInstagram 
  } from "react-icons/fa";
  
  const ContactInfo = () => {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200 w-full">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 md:mb-8 text-center md:text-left">
          Get in Touch
        </h3>
  
        {/* Contact Details */}
        <div className="space-y-4 md:space-y-6">
          {[ 
            { icon: FaMapMarkerAlt, text: "Jamsherpur,Arabpur, Nadia,741122" },
            { icon: FaPhoneAlt, text: "+91 6294385793" },
            { icon: FaPhoneAlt, text: "+91 9429694155" },
            { icon: FaEnvelope, text: "dishareaiwelfarefoundation@gmail.com" },
          ].map(({ icon: Icon, text }, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3 md:space-x-4 text-center md:text-left break-words"
            >
              <Icon className="text-[#1a237e] text-xl md:text-2xl flex-shrink-0" />
              <span className="text-base md:text-lg text-gray-700 break-all">{text}</span>
            </div>
          ))}
        </div>
  
        {/* Social Media Section */}
        <div className="mt-8 md:mt-10 text-center md:text-left">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 flex-wrap">
            {[
              { icon: FaFacebookF, bg: "bg-blue-600" },
              { icon: FaTwitter, bg: "bg-blue-400" },
              { icon: FaLinkedinIn, bg: "bg-blue-700" },
              { icon: FaInstagram, bg: "bg-gradient-to-r from-pink-500 to-orange-400" },
            ].map(({ icon: Icon, bg }, index) => (
              <button
                key={index}
                className={`${bg} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-transform transform hover:scale-110`}
              >
                <Icon className="text-lg md:text-xl" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  