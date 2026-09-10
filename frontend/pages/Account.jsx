import React from "react";
import { Link, useParams } from "react-router-dom";
import Acclog from "../components/acclog";

const account = ({ user }) => {
  const { subpage } = useParams();

  const buttonclass = (button) => {
    let finalclassname =
      "flex cursor-pointer rounded-2xl border-2 bg-orange-300 px-8 py-2 shadow-md shadow-orange-300 transition hover:bg-orange-500";

    if (button === subpage) finalclassname += " bg-orange-500";

    return finalclassname;
  };

  return (
    <section className="bg-orange-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-8">
        <div className="flex">
          <Link to="/account/perfil" className={buttonclass("perfil")}>
            perfil
          </Link>
          <Link to="/account/adicionar" className={buttonclass("adicionar")}>
            adicionar moto
          </Link>
          <Link to="/account/buscar" className={buttonclass("buscar")}>
            buscar motos
          </Link>
        </div>
        <div>{subpage === "perfil" && <Acclog user={user} />}</div>
      </div>
    </section>
  );
};

export default account;
