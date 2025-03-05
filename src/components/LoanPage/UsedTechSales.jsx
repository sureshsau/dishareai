import React from "react";
import laptopImage1 from "../../assets/image/laptopImage1.jpeg";
import laptopImage2 from "../../assets/image/laptopImage2.png";
import mobile1 from "../../assets/image/mobile1.webp";
import mobile3 from "../../assets/image/mobile3.jpg";
import mobile2 from "../../assets/image/mobile2.jpeg";

const UsedTechSales = () => {
  const laptopProducts = [
    {
      title: "Second Hand Laptop",
      image: laptopImage1,
      description:
        "High-performance, reliable second-hand laptops suitable for both business and personal use.",
      price: "₹15,000",
    },
    {
      title: "Second Hand Laptop",
      image: laptopImage2,
      description:
        "Experience robust performance with our certified used laptops, perfect for everyday tasks and business needs.",
      price: "₹15,000",
    },
  ];

  const mobileProducts = [
    {
      title: "Second Hand Phone",
      image: mobile1,
      description:
        "Affordable and feature-rich second-hand phones that meet your everyday communication needs.",
      price: "₹8,000",
    },
    {
        title: "Second Hand Phone",
        image: mobile2,
        description:
          "Our pre-owned mobile phones are inspected for quality and reliability, offering a budget-friendly solution.",
        price: "₹10,000",
      },
    {
      title: "Second Hand Phone",
      image: mobile3,
      description:
        "Our pre-owned mobile phones are inspected for quality and reliability, offering a budget-friendly solution.",
      price: "₹8,000",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1a237e] mb-12">
          Used Tech Sales
        </h2>

        {/* Used Laptops Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1a237e] mb-4 text-center">
            Used Laptops
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our collection of pre-owned laptops offers excellent performance at a fraction of the cost.
            Perfect for both business and personal use, each laptop is rigorously tested for reliability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laptopProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-[#1a237e] mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  {product.description}
                </p>
                <div className="text-lg font-semibold text-[#1a237e]">
                  {product.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Used Mobile Phones Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#1a237e] mb-4 text-center">
            Used Mobile Phones
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our range of certified pre-owned mobile phones provides great value and reliability for everyday communication.
            Each device is carefully inspected to ensure quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-[#1a237e] mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  {product.description}
                </p>
                <div className="text-lg font-semibold text-[#1a237e]">
                  {product.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedTechSales;
