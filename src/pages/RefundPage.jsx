import React from 'react';
import Layout from '../components/layouts/Layout';
import Banner from '../components/HomePage/Banner';

const RefundPage = () => {
  return (
    <Layout>
      <div className="w-screen flex flex-col items-center">
        <Banner />
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-20">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-5xl font-extrabold text-center text-[#1a237e] mb-6">
              E-Mandate Cancellation & Refund Policy
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Please read our refund policy carefully to understand the terms under which refunds are processed.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">1. Cancellation Request Processing</h3>
                <p className="text-gray-700">
                  Upon receiving a cancellation request, we will promptly process the cancellation and cease further
                  debits from the customer's account under the e-mandate.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">2. Refunding Excess Payments</h3>
                <p className="text-gray-700">
                  In the event that our company receives a wrong or excess payment from a customer, we are committed to
                  refunding the excess amount promptly.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">3. Customer Notification</h3>
                <p className="text-gray-700">
                  Customers who have made a wrong or excess payment are requested to notify us immediately through
                  designated channels, providing details of the transaction and the excess amount paid.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">4. Verification & Refund</h3>
                <p className="text-gray-700">
                  Upon verification of the excess payment, we will initiate the refund process without undue delay.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">5. Refund Timeline</h3>
                <p className="text-gray-700">
                  Refunds will be processed manually and after verification, if the claim is found valid, the amount
                  received in excess will be refunded by us through the original payment method used by the customer,
                  within a period of 7–10 working days on receipt of such claim. It will take 5–7 days for the money to
                  show in your bank account depending on your bank’s policy.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">6. Equivalent Refund</h3>
                <p className="text-gray-700">
                  The refund amount will be equivalent to the excess payment received, minus any applicable fees or
                  charges as per our terms and conditions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">7. Policy Updates</h3>
                <p className="text-gray-700">
                  We reserve the right to modify or update our e-mandate cancellation and refund policy at any time
                  without prior notice. Any changes will be effective immediately upon posting on our website or other
                  communication channels.
                </p>
              </div>

              {/* 🚚 New Section: Shipping, Return, Replacement Policy */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">8. Shipping Policy</h3>
                <p className="text-gray-700">
                  Orders will be delivered within <strong>1 day</strong> of being placed.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">9. Return Policy</h3>
                <p className="text-gray-700">
                  We offer a <strong>7-day return policy</strong>.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1a237e] mb-3">10. Replacement Policy</h3>
                <p className="text-gray-700">
                  Replacement or exchange orders will be delivered within <strong>5–7 business days.</strong> 
                </p>
              </div>
            </div>

            {/* 📞 Contact Section */}
            <div className="mt-12 bg-[#1a237e]/5 rounded-xl p-8 shadow-lg text-center">
              <h4 className="text-xl font-bold text-[#1a237e] mb-4">Contact Information</h4>
              <p className="text-gray-700">For refund requests or any inquiries, please reach out to us:</p>
              <p className="text-gray-700 mt-4">
                Phone:{' '}
                <a href="tel:+916294385793" className="text-[#1a237e]">
                  62943 85793
                </a>
                ,{' '}
                <a href="tel:+919429694155" className="text-[#1a237e]">
                  94296 94155
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                Email:{' '}
                <a href="mailto:dishareaiwelfarefoundation@gmail.com" className="text-[#1a237e]">
                  dishareaiwelfarefoundation@gmail.com
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                Address: Bagchi, Jamsherpur Arabpur, Nadia, Pin-741122
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPage;
