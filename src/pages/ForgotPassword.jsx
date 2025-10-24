import React, { use } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent!",
          icon: "success",
          text: "Redirecting to Gmail...",
          draggable: true,
        });
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <title>ForgotPassword</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-bold text-xl text-center">Reset Password</h2>
        <form onSubmit={handleReset}>
          <div className="card-body">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              defaultValue={prefilledEmail}
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
