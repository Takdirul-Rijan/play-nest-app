import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    // console.log("LogOut Btn Clicked");

    logOut()
      .then(() => {
        Swal.fire({
          title: "Sign-out successful.",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-yellow-100 shadow-md sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        <div className="flex items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-600 tracking-wide">
            Toy<span className="text-yellow-500">Topia</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-end lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-pink-600 border-b-2 border-pink-500" : ""
            }
          >
            <span className="hover:text-pink-500 cursor-pointer transition text-gray-700 font-medium">
              Home
            </span>
          </NavLink>
          <span className="hover:text-pink-500 cursor-pointer transition text-gray-700 font-medium">
            My Profile
          </span>

          <img className="w-12 rounded-full" src={userIcon} alt="" />

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary bg-pink-500 hover:bg-pink-600 font-bold text-white border-none"
            >
              LogOut
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn btn-primary bg-pink-500 hover:bg-pink-600 font-bold text-white border-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
