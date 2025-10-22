import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, price, rating, availableQuantity, pictureURL } = toy;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300">
      <figure className="px-4 pt-4">
        <img
          src={pictureURL}
          alt=""
          className="rounded-xl w-full h-48 object-contain"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-pink-600">{toyName}</h2>
        <p className="text-gray-600 font-medium">Price: ${price}</p>
        <p className="text-gray-500 text-sm">Rating: {rating} ⭐</p>
        <p className="text-gray-500 text-sm">Available: {availableQuantity}</p>

        <div className="card-actions">
          <Link
            to={`/toy/${toyId}`}
            className="btn btn-sm bg-pink-500 hover:bg-pink-600 border-none text-white font-semibold"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
