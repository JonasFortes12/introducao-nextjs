"use client";

import { useState } from "react";

type ProdutoCompra = {
  item: string;
  comprado: boolean;
};

export default function ShoppingList() {
  const [list, setList] = useState <ProdutoCompra[]> ([
    { item: "Arroz", comprado: false },
    { item: "Maizena", comprado: false },
    { item: "Nescau", comprado: false },
    { item: "Cream Cracker", comprado: false },
    { item: "Óleo de Girassol", comprado: false },
    { item: "Margarina", comprado: false },
    { item: "Salsinha", comprado: false },
  ]);

  const marcarComoComprado = (index: number) => {
    const novaLista = [...list];
    novaLista[index].comprado = !novaLista[index].comprado; 
    setList(novaLista);
  };

  return (
    <div className="flex flex-col items-center border-5 w-85 p-5 rounded">
      <h1 className="text-xl font-bold mb-3 mt-3"> Lista de Compras </h1>
      <ul className="space-y-3">
        {list.map((produto, index) => (
          <li
            key={index}
            className="flex justify-between items-center w-65 p-2 border rounded bg-blue-100"
          >
            <span className={produto.comprado ? "line-through text-gray-500" : ""}>
            {produto.item}
            </span>
            <button
              onClick={() => marcarComoComprado(index)}
              className={`px-3 py-3 rounded text-white ${
                produto.comprado
                  ? "bg-red-500 hover:bg-red-600 text-sm"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {produto.comprado ? "Comprado" : "Comprar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
