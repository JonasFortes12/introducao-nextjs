import { useEffect, useState } from "react"



export default function EffectCounter() {
    
    const [count,setCount] = useState(0)
    useEffect(()=>{
        alert('Hello World')
        document.title = 'sla'
    }, [count])
    
    return (
        <div className="text-center p-10">
            <h1>Contagem: {count}</h1>
            <button className="bg-amber-50 rounded p-2 m-2 hover:bg-amber-200" onClick={()=>{setCount(count+1)}}>Incrementar</button>
            <button className="bg-amber-500 rounded p-2 m-2 hover:bg-amber-600" onClick={()=>{setCount(0)}}>Resetar</button>
        </div>
    )
}