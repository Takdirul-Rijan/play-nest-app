import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ToyCard from "./ToyCard";

const PopularToys = () => {
  const data = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // asc or desc

  // Filter
  const filteredToys =
    searchQuery.trim() === ""
      ? data
      : data.filter((toy) =>
          toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // Sort (default: no sorting)
  const sortedToys = [...filteredToys].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price; // ascending by price
    }
    if (sortOrder === "desc") {
      return b.price - a.price; // descending by price
    }
    return 0; // no sort
  });

  return (
    <section className="w-11/12 mx-auto py-10 bg-gradient-to-r from-yellow-50 via-pink-50 to-rose-50">
      <div>
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Popular Toys
        </h2>

        {/* Search + Sorting */}
        <div className="mb-8 flex gap-4 justify-center">
          <input
            type="text"
            placeholder="Search for a toy..."
            className="p-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            className="p-2 border rounded-lg"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By Price</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {sortedToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToys;
