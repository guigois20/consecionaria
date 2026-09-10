import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Acclog = ({ user }) => {
  const [Redirect, setRedirect] = useState(false);

  const Logout = async () => {
    try {
      await axios.post("/users/logout");
      setRedirect(true);
    } catch (error) {
      alert(JSON.stringify("erro ao deslogar"));
      console.log(error);
    }
  };

  if (Redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p>
          logado como {user?.name} ({user?.email})
        </p>
        <div className="flex items-center justify-center">
          <button
            onClick={Logout}
            className="flex cursor-pointer rounded-2xl border-2 bg-red-500 px-8 py-2 shadow-md shadow-orange-300 transition hover:bg-red-800"
          >
            sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acclog;
