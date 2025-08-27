'use client'

import { useState } from "react";


type ListaProps = {
    compras: {
        item: string;
        comprado: boolean
    }[]
}

export default function ListaDeCompras({compras}: ListaProps) {

    const [lista, setLista] = useState(compras)


    const ChangeLista = (index: number) => {
        const ChangedList =  lista.map((item, i)=>{
            if (i == index) {
                item.comprado = ! item.comprado
            }
            return item
        })
        setLista(ChangedList)
    }    

    return (
        <div className="flex justify-center">
            <div className="p-4 mt-8 text-2xl bg-amber-400 rounded">
                <h1 className="text-4xl mb-2">Lista de Compras</h1>
                <ul>
                    {lista.map((compra, index)=>(
                        <div key={index} className="flex space-x-1">
                            <input 
                            type="checkbox" 
                            onChange={()=>{ChangeLista(index)}} 
                            // checked={compra.comprado}
                            />
                            <li className={`${compra.comprado ? "line-through text-gray-400" : "" }`}>{compra.item}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}