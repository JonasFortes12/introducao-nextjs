"use client";

import { useState } from "react";

export default function ListaCompras() {
  const items = [
    { nome: "computador", comprado: false },
    { nome: "arroz", comprado: false },
    { nome: "livro: Mem. de Subsolo", comprado: false },
  ];

  const [listaCompras, setListaCompras] = useState(items) 

  function handleCheck(index: number) {
    const listaAtualizada = listaCompras.map((item, i)=>{
        if(i == index) {
            item.comprado = !item.comprado
        }
        return item
    })

    setListaCompras(listaAtualizada)
  }

  return (
    <div>
      <h1>Lista de Compras</h1>
      <ul>
        {listaCompras.map((item, index) => (
          <li key={index} className="">
            <input onClick={() => handleCheck(index)} type="checkbox" />
            <span 
                className={item.comprado ? 
                "mx-2 line-through" : "mx-2"} >
                {item.nome}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
