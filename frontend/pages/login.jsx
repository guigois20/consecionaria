import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <section className="flex items-center bg-orange-100">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Faca seu login</h1>
        <form className="flex w-full max-w-96 flex-col gap-2">
          <input
            type="text"
            className="flex gap-4 rounded-4xl border-2 border-gray-700 px-8 py-2 shadow-md shadow-black"
            placeholder="digite seu login"
          />
          <input
            type="password"
            className="flex gap-4 rounded-4xl border-2 border-gray-700 px-8 py-2 shadow-md shadow-black"
            placeholder="digite sua senha"
          />
          <button className="w-full cursor-pointer gap-2 rounded-4xl border-2 border-gray-700 bg-orange-400 px-8 py-2 text-black shadow-md shadow-black hover:bg-orange-800">
            entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default login;
