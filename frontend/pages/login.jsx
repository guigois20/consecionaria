import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userdoc } = await axios.post("/users/login", {
          email,
          password,
        });
        setUser(userdoc);
        setRedirect(true);
        console.log(userdoc);
      } catch (error) {
        console.log(
          `erro ao logar ${respose.data} senha ou email invalidos`,
          error,
        );
      }
    } else {
      alert("é necessario ter login e senha preenchidos");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <section className="flex items-center bg-orange-100">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Faca seu login</h1>
        <form
          className="flex w-full max-w-96 flex-col gap-2"
          onSubmit={handlesubmit}
        >
          <input
            type="email"
            className="flex gap-4 rounded-4xl border-2 border-gray-700 px-8 py-2 shadow-md shadow-black"
            placeholder="digite seu login"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="flex gap-4 rounded-4xl border-2 border-gray-700 px-8 py-2 shadow-md shadow-black"
            placeholder="digite sua senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
