import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../pages/Loading";

const Navbar = () => {
  const { user, logOut, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

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
              isActive
                ? "text-pink-600 bg-white shadow-lg shadow-pink-200/60 border border-pink-300 rounded-xl px-4 py-2 font-semibold scale-105 transition-all duration-300"
                : ""
            }
          >
            <span className="hover:text-pink-500 cursor-pointer transition text-gray-700 font-medium">
              Home
            </span>
          </NavLink>
          <span className="hover:text-pink-500 cursor-pointer transition text-gray-700 font-medium">
            My Profile
          </span>

          <img
            className="w-12 rounded-full hover:cursor-pointer "
            src={`${user ? user.photoURL : ""}`}
            alt=""
            title={user ? user.displayName || user.name : ""}
          />

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
