"use client"

import { useState } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';


export default function MusicReprodution() {

    const [isPlay, setIsPlay] = useState(false)
    
    return(
        <button
            onClick={() => {setIsPlay(!isPlay)}}
          className={`flex items-center
            space-x-2 p-2 rounded-md

            bg-gray-50 hover:bg-gray-100
            ${isPlay ? 
                "text-red-500  hover:text-red-500 bg-gray-50 hover:bg-gray-100" :
                "text-emerald-400 hover:text-emerald-500 bg-gray-50 hover:bg-gray-100"}
            `}
        >
            <span>{isPlay ? <FaPause /> : <FaPlay /> }</span>
            <span>{isPlay ? "Pause" : "Play"}</span>
        </button>
    );
}