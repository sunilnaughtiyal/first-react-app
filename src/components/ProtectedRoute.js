// src/components/ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../pages/supabaseClient";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // current session check
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    // agar user signout/signin kare to listen kare
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  // agar login nahi hai to signin page pe bhej do
  if (!session) {
    return <Navigate to="/signin" replace />;
  }

  // agar login hai to children show karo
  return children;
}

export default ProtectedRoute;
