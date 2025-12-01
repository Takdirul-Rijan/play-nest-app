import React from "react";

const ChooseUs = () => {
  return (
    <section className="w-11/12 mx-auto py-12 bg-gradient-to-r from-pink-50 via-yellow-50 to-rose-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">
          Why Choose <span className="text-yellow-500">PlayNest?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Safe & Quality Toys
            </h3>
            <p className="text-gray-600">
              We ensure every toy meets top safety standards, keeping your kids
              happy and safe.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Enjoy premium quality toys at reasonable prices with frequent
              discounts.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              We deliver your orders quickly and safely right to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
