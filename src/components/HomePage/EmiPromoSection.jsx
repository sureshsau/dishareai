import React from "react";
import emiBanner from "../../assets/image/emiBanner.jpeg"; // Ensure the image path is correct

const EmiPromoSection = () => {
  return (
    <div className="w-full px-4 md:px-12 py-10 bg-white flex flex-col items-center gap-6">
      {/* Text Content */}
      <div className="w-full md:max-w-4xl text-center space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          💸 No Cash? No Problem!
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-medium">
          Shop your dream phone or laptop today with{" "}
          <span className="text-orange-600 font-semibold">Easy EMI options</span> —
          no need to worry about your budget!
        </p>
        <p className="text-sm md:text-base text-orange-600 font-semibold tracking-wide uppercase">
          #EasyEMI with Dishareai Welfare Foundation
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:max-w-2xl">
        <img
          src={emiBanner}
          alt="Easy EMI Promo"
          className="w-full h-auto rounded-xl shadow-xl object-cover"
        />
      </div>
    </div>
  );
};

export default EmiPromoSection;
