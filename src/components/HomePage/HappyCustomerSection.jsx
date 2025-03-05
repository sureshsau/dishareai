import React from "react";
import customer1 from "../../assets/image/customers/customer1.jpeg";
import customer2 from "../../assets/image/customers/customer2.jpeg";
import customer3 from "../../assets/image/customers/customer3.jpeg";

const customers = [customer1, customer2, customer3];

const HappyCustomers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#1a237e] mb-10">
          Our Happy Customers
        </h2>
        
        {/* Customer Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {customers.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Customer ${index + 1}`}
                className="w-44 h-44 object-cover rounded-full border-4 border-[#1a237e] shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
