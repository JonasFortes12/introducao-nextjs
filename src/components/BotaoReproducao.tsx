import { useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa";

export default function ButaoReproducao() {

    const [isTocad, setIsTocad] = useState(false)


    return (
        <div className="flex justify-center">
            <button
            onClick={()=>{setIsTocad(!isTocad)}}
            className={`flex flex-col items-center justify-center m-4 p-4 space-x-2 text-2xl rounded text-black bg-gray-300 hover:bg-gray-400`}>
                <span>{isTocad ? <FaPlay /> : <FaPause />}</span>  
                <span className='text-[14px]'>{isTocad ? 'Musica pausado' : 'Musica despausado'}</span>
            </button>
        </div>
    )
}