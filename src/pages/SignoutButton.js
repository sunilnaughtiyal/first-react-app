import React from "react";
import { useAuth } from "../context/AuthContext";

const SignoutButton = () => {
  const { signOut } = useAuth();

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <button
      onClick={handleSignout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Sign Out
    </button>
  );
};

export default SignoutButton;
