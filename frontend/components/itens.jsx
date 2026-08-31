import React from "react";

const itens = () => {
  return (
    <a href="" className="flex flex-col gap-2">
      <img
        src="..\public\pop100.jpg"
        alt="pop100"
        className="aspect-square rounded-2xl object-cover"
      />
      <h3 className="text-xl font-semibold">Pop-100-2010</h3>
      <p className="truncate text-gray-800">
        pop 100 so atrasada para vender com documento e recibo placa de sergipe
      </p>
      <p>
        <span className="font-semibold">4600R$</span>
      </p>
    </a>
  );
};

export default itens;
