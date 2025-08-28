// pages/Profile.js
import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
          <h2 className="text-xl font-semibold mb-4">Not Logged In</h2>
          <p className="text-gray-600">Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Your Profile</h2>

        <div className="text-left mb-6">
          <p className="mb-2">
            <span className="font-semibold">Name: </span>
            {user.user_metadata?.full_name || "Not provided"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email: </span>
            {user.email}
          </p>
          <p className="mb-2">
            <span className="font-semibold">User ID: </span>
            <span className="text-gray-500 text-sm">{user.id}</span>
          </p>
        </div>

        <button
          onClick={signOut}
          className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
