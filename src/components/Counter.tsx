import { useState } from "react"


interface countProps {
    ititial: number,
}


export default function Counter(props: countProps) {
    const [count, setCount] = useState(props.ititial)

   

    return (
        <>
            <h1 className="bg-blue-600 text-3xl py-1.5 text-center">Contagem: {count}</h1>
            <button onClick={() => setCount(count + 1)} className="bg-red-600 flex-1/3 rounded px-4 py-2 hover:bg-red-700">Incrementar</button>
            <button onClick={() => setCount(count - 1)} className="bg-blue-600 rounded flex-1/3 px-4 py-2 hover:bg-blue-700">Decrementar</button>
        </>
    )
}