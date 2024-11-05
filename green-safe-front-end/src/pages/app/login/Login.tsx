import React from "react";
import Logo from "/src/assets/agriculture-logo.svg?react";

export const Login = () => {
  return (
    <div className="flex">
      <div className="bg-hero-pattern bg-black bg-opacity-75 bg-cover bg-center bg-blend-darken w-full h-screen"></div>
      <div className="w-full p-16 space-y-14 h-screen flex flex-col">
        <div className="w-1/4">
          <Logo />
        </div>
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h2 className="font-bold text-2xl">Vamos registrar sua conta</h2>
            <p className="text-sm opacity-50 ju mt-1">
              Registre-se na greensafe para gerenciar seu agronegócio
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="">Primeiro nome</label>
              <input
                type="text"
                placeholder="Digite seu primeiro nome"
                className="w-full rounded-md bg-gray-100 border p-2 h-12 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="">Sobrenome</label>
              <input
                type="text"
                placeholder="Digite seu sobrenome"
                className="w-full rounded-md bg-gray-100 border p-2 h-12 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Digite seu email"
                className="w-full rounded-md bg-gray-100 border p-2 h-12 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="">Foto do rosto</label>
              <input
                type="file"
                className="w-full rounded-md bg-gray-100 border p-2 h-12 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <button className="w-full bg-emerald-700 h-12 text-white rounded-md">
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
