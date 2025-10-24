import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        Swal.fire({
          title: "Signed in successfully",
          icon: "success",
          draggable: true,
        });
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Invalid email or password",
          footer:
            '<span style="color:#d33">Please check your email and password.</span>',
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-xl text-center">Login Your Account</h2>
        <form onSubmit={handleLogIn}>
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
                  type="button"
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
            </fieldset>
          </div>
        </form>
        <div className="flex justify-center">
          <button className="btn btn-secondary btn-outline w-[336px]">
            <FcGoogle size={20} /> Login with Google
          </button>
        </div>
        <p className="pt-5 text-center font-semibold">
          Don't have an account ?{" "}
          <Link to={"/auth/register"} className="text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
