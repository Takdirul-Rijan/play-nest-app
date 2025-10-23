import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-xl text-center">Login Your Account</h2>
        <form>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={handleToggleShowPassword}
                  className=" btn-xs absolute top-3.5 right-7 "
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <a className="link link-hover">Forgot password?</a>

              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>

              <button className="btn btn-secondary btn-outline w-full">
                <FcGoogle size={24} /> Login with Google
              </button>
              <p className="pt-5 text-center font-semibold">
                Don't have an account ?{" "}
                <Link to={"/auth/register"} className="text-blue-400">
                  Register
                </Link>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
