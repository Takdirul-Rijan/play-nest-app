import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-100 via-rose-100 to-pink-100 text-gray-700 shadow-md z-50">
      <div
        className="
          w-11/12 mx-auto py-8
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-[1.15fr_1fr_1fr_1.15fr]
          gap-x-8 sm:gap-x-10 md:gap-x-14 lg:gap-x-20
          gap-y-10
          items-start
          text-center sm:text-left
        "
      >
        <div className="max-w-xs justify-self-center sm:justify-self-start">
          <h2 className="text-2xl font-extrabold text-pink-600 mb-3">
            Play<span className="text-yellow-500">Nest</span>
          </h2>
          <p className="text-sm leading-relaxed">
            A world of fun and imagination for kids! Discover vibrant toys from
            local sellers and bring smiles to little faces.
          </p>
        </div>

        <div className="max-w-xs justify-self-center">
          <h3 className="text-lg font-semibold text-pink-600 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              My Profile
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              All Toys
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="max-w-xs justify-self-center lg:translate-x-[28px]">
          <h3 className="text-lg font-semibold text-pink-600 mb-3">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer transition">
              Terms & Conditions
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              Return Policy
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              Help & Support
            </li>
          </ul>
        </div>

        <div className="max-w-xs justify-self-center sm:justify-self-end">
          <h3 className="text-lg font-semibold text-pink-600 mb-3">
            Follow Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-pink-500 cursor-pointer transition">
              <FaFacebook /> Facebook
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-pink-500 cursor-pointer transition">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-pink-500 cursor-pointer transition">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-pink-500 cursor-pointer transition">
              <FaYoutube /> YouTube
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pink-200 text-center py-3 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-pink-600">PlayNest</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
