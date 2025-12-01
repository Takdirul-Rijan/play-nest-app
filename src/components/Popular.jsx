import React from "react";
import ToyCard from "../components/ToyCard";

const Popular = ({ toys }) => {
  const popularToys = toys.slice(0, 8);

  return (
    <section className="w-11/12 mx-auto py-10 bg-gradient-to-r from-yellow-50 via-pink-50 to-rose-50">
      <div>
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Popular Toys
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
