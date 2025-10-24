import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "./Loading";

const MyProfile = () => {
  const { user, updateUser, loading, setUser } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  if (loading) {
    return <Loading></Loading>;
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateUser({ displayName: name, photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        Swal.fire({
          title: "Profile Updated Successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <title>My Profile</title>
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
        <form onSubmit={handleUpdateProfile}>
          <div className="form-control mb-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input input-bordered"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered"
              value={user?.email || ""}
              disabled
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-2">
            Save Changes
          </button>
        </form>

        <div className="mt-6 text-center">
          <h3 className="font-semibold mb-2">Preview:</h3>
          <img
            src={photoURL}
            alt={name}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <p className="font-medium">{name}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
