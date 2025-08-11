"use client";

import { init } from "next/dist/compiled/webpack/webpack";
import { useState } from "react";

interface countProps {
  initial: number;
}

export default function Counter(props: countProps) {
  const [count, setCount] = useState(props.initial);

  return (
    <>
      <h1 className="bg-blue-300 text-center">Contagem: {count}</h1>

      <button
        onClick={()=> setCount(count + 1)}
        className="bg-red-400 rounded px-4 py-2 
        hover:bg-red-300 w-1/2 self-center mt-5" 
      >
        Incrimentar
      </button>

       <button
        onClick={()=> setCount(count - 1)}
        className="bg-blue-400 rounded px-4 py-2 
        hover:bg-blue-300 w-1/2 self-center mt-5" 
      >
        Decrementar
      </button>
    </>
  );
}
