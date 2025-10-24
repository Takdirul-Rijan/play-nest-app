import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const ToyDetails = () => {
  const data = useLoaderData();
  //   console.log(data);

  const { id } = useParams();

  //   console.log(id);

  const toy = data.find((singleToy) => singleToy.toyId == id);
  //   console.log(toy);

  const handleTryNow = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;

    // console.log(name, email);

    toast.success("🎉 Wow! You've successfully tried out this toy!");

    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <title>{toy.toyName}</title>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={toy.pictureURL}
          alt=""
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />

        <div className="md:w-1/2 space-y-3">
          <h2 className="text-3xl font-bold text-pink-600">{toy.toyName}</h2>
          <p className="text-gray-600">{toy.description}</p>
          <p className="text-lg">
            <span className="font-semibold">Price:</span> ${toy.price}
          </p>
          <p className="flex  gap-1">
            <span className="font-semibold">Rating:</span>
            <span> {toy.rating}</span>
            <FaStar className="text-yellow-400"></FaStar>
          </p>
          <p>
            <span className="font-semibold">Available:</span>{" "}
            {toy.availableQuantity}
          </p>
          <p>
            <span className="font-semibold">Seller:</span> {toy.sellerName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {toy.sellerEmail}
          </p>
        </div>
      </div>

      <div className="mt-10 bg-pink-50 p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold text-center text-pink-600 mb-4">
          Try Now
        </h3>
        <form
          onSubmit={handleTryNow}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            pattern="[A-Za-z\s]+"
            title="Please enter letters only"
            className="input input-bordered w-64 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-64 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            className="btn bg-pink-500 hover:bg-pink-600 border-none text-white"
          >
            Try Now
          </button>
        </form>
      </div>
      <div className="text-center mt-8">
        <Link to="/">
          <button className="btn bg-gray-200 hover:bg-gray-400 text-gray-700 rounded-full px-6">
            <IoMdArrowRoundBack /> Back to Home
          </button>
        </Link>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ToyDetails;
