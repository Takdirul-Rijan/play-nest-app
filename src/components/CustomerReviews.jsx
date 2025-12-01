import React, { use } from "react";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const CustomerReviews = () => {
  const reviews = use(reviewPromise);

  return (
    <section className="w-11/12 mx-auto py-12 bg-gradient-to-r from-pink-50 via-yellow-50 to-rose-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">
          What Our <span className="text-yellow-500">Customers</span> Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <img
                  src=""
                  alt=""
                  className="w-16 h-16 bg-emerald-400 rounded-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-pink-500 mb-3">
                {review.name}
              </h3>

              <p className="text-gray-600">{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
