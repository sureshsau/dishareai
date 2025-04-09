import React from "react";
import bannerImage from "../../assets/image/emiBanner.jpeg"; 

const FloatingBanner = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-[320px] max-w-[90%] md:w-[360px] shadow-2xl rounded-2xl overflow-hidden border border-gray-300 bg-white">
      <img
        src={bannerImage}
        alt="Easy EMI Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default FloatingBanner;
