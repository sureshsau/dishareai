import React from "react";
import bannerImage from "../../assets/image/bannerImage.jpg";

const Banner = () => {
  return (
    <div
      className="relative w-full h-150 md:h-150 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Dark overlay for improved text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Banner Content Container */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center
       h-full px-6 md:px-30 md:w-1/2 text-left">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
          Empowering Dreams Through Financial Support
        </h1>
        <p className="text-white text-base md:text-xl mb-8 max-w-lg">
          Secure, flexible loans tailored to your needs. Start your journey towards financial freedom today.
        </p>
        <div className="flex justify-start w-full  gap-4">
          <button className="px-6 py-3 bg-yellow-300 hover:bg-yellow-600 font-semibold rounded transition duration-300">
            Apply for Loan
          </button>
          <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold rounded transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
