import React from "react";
import { toast, ToastContainer } from "react-toastify";

const JoinUs = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    e.target.email.value = "";
    toast.success("✨ Subscription successful 🎉 Welcome to PlayNest!");
  };

  return (
    <section className="py-12 bg-gradient-to-r from-yellow-50 via-rose-50 to-pink-50">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">
          Join Our <span className="text-yellow-500">Toy Lovers Community</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Be the first to know about new arrivals, exclusive discounts, and
          exciting toy stories!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="input input-bordered w-72 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="btn bg-pink-500 hover:bg-pink-600 border-none text-white">
            Subscribe
          </button>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default JoinUs;
