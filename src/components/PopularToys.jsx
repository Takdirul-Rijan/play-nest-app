import React from "react";
import { useLoaderData } from "react-router";
import ToyCard from "./ToyCard";

const PopularToys = () => {
  const data = useLoaderData();
  //   console.log(data);

  return (
    <section className="w-11/12 mx-auto py-10 bg-gradient-to-r from-yellow-50 via-pink-50 to-rose-50">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Popular Toys
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToys;
