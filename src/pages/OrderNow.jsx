// src/pages/PreOrder.jsx
import React from "react";
import Swal from "sweetalert2";

const PreOrder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const toyName = form.toyName.value;
    Swal.fire({
      title: "Your order submitted! Check your email for confirmation",
      icon: "success",
      draggable: true,
    });

    form.reset(); // clear form after submit
  };

  return (
    <div className="flex justify-center min-h-screen items-center p-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <title>Order</title>
      <div className="card w-full max-w-md shadow-2xl bg-white p-6 rounded-2xl border-4 border-pink-300">
        <h2 className="text-3xl font-extrabold mb-2 text-center text-purple-700">
          Order Now
        </h2>
        <p className="text-center mb-4 text-purple-600 font-medium">
          Be the first to get our newest toy collection! You can also request
          your new toy.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full border-purple-400 focus:border-pink-500 focus:ring-pink-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input input-bordered w-full border-purple-400 focus:border-pink-500 focus:ring-pink-200"
            required
          />
          <input
            type="text"
            name="toyName"
            placeholder="Toy Name / Model"
            className="input input-bordered w-full border-purple-400 focus:border-pink-500 focus:ring-pink-200"
            required
          />
          <button
            type="submit"
            className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white w-full hover:scale-105 transition-transform duration-300"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreOrder;
