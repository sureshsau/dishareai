import React from "react";
import bannerImage from "../../assets/image/bannerImage.jpg";

const Banner = () => {
  return (
    <div
      className="relative w-full h-auto md:h-[500px] bg-cover bg-center flex items-center justify-center py-15 md:py-0"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 text-white flex flex-col md:flex-row items-center md:items-center justify-between">
        {/* Heading */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-snug md:leading-tight font-sans">
            Empowering Dreams <br className="hidden sm:block" />
            Through Financial Support
          </h1>
        </div>

        {/* Text Box */}
        <div className="w-full md:w-[45%] bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl text-white space-y-4 font-[500] text-sm md:text-base mb-4 md:mb-0 text-center md:text-left">
          <p className="text-lg md:text-xl font-semibold font-serif break-words">
            🎉 Enjoy No-Cost EMI on Your Purchase!
          </p>
          <p className="font-light leading-relaxed font-sans">
            Take home your favorite phone or laptop today and pay in easy monthly installments—by
            setting up UPI AutoPay or e-NACH, with absolutely no extra cost!
          </p>
          <p className="font-light leading-relaxed font-sans">
            You only pay the original price of the product, with zero interest and no hidden charges.
          </p>
          <p className="font-light leading-relaxed font-sans">
            Shop smart, stay stylish, and manage your budget with ease!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
