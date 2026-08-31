import React from "react";
import Itens from "../components/itens";

const Home = () => {
  return (
    <section>
      <div className="max-w- mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8">
        <Itens />
        <Itens />
        <Itens />
        <Itens />
        <Itens />
        <Itens />
        <Itens />
        <Itens />
        <Itens />
        <Itens />
      </div>
    </section>
  );
};

export default Home;
