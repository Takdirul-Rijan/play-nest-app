import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
  const data = useLoaderData();
  //   console.log(data);

  const { id } = useParams();

  //   console.log(id);

  const toy = data.find((singleToy) => singleToy.toyId == id);
  //   console.log(toy);

  return (
    <div className="w-11/12 mx-auto py-10">
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
    </div>
  );
};

export default ToyDetails;
