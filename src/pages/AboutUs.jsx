import React from "react";
import { Heart, Star, Users, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-11/12 mx-auto py-14 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            About PlayNest
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At PlayNest, we believe every child deserves toys that spark
            imagination, creativity, and joy. We proudly offer high-quality,
            safe, and innovative toys that bring smiles to families everywhere.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">
            Who We Are
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are a passionate team committed to creating a magical shopping
            experience for toy lovers of all ages. From educational toys to fun
            collectibles, every product in our catalog is selected with safety,
            durability, and excitement in mind.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Since our launch, ToyGalaxy has grown into a trusted brand loved by
            parents, kids, and toy collectors across the country.
          </p>
        </div>

        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Our Core Values
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 text-center hover:shadow-lg transition">
            <Heart className="text-pink-600 mx-auto mb-4" size={40} />
            <h4 className="text-lg font-semibold text-gray-800">Passion</h4>
            <p className="text-gray-600 text-sm mt-2">
              We put love and care into every toy we bring to our store.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 text-center hover:shadow-lg transition">
            <Star className="text-pink-600 mx-auto mb-4" size={40} />
            <h4 className="text-lg font-semibold text-gray-800">Quality</h4>
            <p className="text-gray-600 text-sm mt-2">
              We ensure premium quality toys that last long and stay safe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 text-center hover:shadow-lg transition">
            <Users className="text-pink-600 mx-auto mb-4" size={40} />
            <h4 className="text-lg font-semibold text-gray-800">Community</h4>
            <p className="text-gray-600 text-sm mt-2">
              Our customers are family — we grow together with trust.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 text-center hover:shadow-lg transition">
            <Target className="text-pink-600 mx-auto mb-4" size={40} />
            <h4 className="text-lg font-semibold text-gray-800">Innovation</h4>
            <p className="text-gray-600 text-sm mt-2">
              We explore new trends to bring exciting, modern toys.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-10 rounded-2xl shadow-lg border border-pink-100 w-11/12 mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is simple — to inspire happiness and creativity through
            toys that encourage learning, imagination, and endless fun. We aim
            to build a joyful world where children can explore, dream, and grow
            with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
