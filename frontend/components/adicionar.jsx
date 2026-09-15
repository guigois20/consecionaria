import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Newmoto from "./newmoto";

const adicionar = () => {
  const { action } = useParams();
  const addNewMoto = () => {
    console.log("adicionando moto");
  };

  return (
    <div className="mr-16 flex max-w-7xl flex-col items-center justify-center gap-4">
      {action !== "new" ? (
        <Link
          to="/account/adicionar/new"
          className="max-w-45 cursor-pointer gap-2 rounded-4xl border-2 border-gray-700 bg-orange-400 px-8 py-2 text-black shadow-md shadow-black hover:bg-orange-800"
        >
          adicionar moto
        </Link>
      ) : (
        <Newmoto />
      )}
    </div>
  );
};

export default adicionar;
