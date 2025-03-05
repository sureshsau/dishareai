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
        
      </div>
    </div>
  );
};

export default Banner;
