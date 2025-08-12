'use client'

import { useState } from "react"


export default function MiniDisplay() {

    const [display, setDisplay] = useState('')


    return(
        <div className="flex flex-col items-center m-10">
            {/* display */}
            <div className="flex justify-center items-center rounded
            p-4 w-60 h-15 mb-5 text-center text-xl border border-gray-400">
                {display}
            </div>
            {/* teclado numerico */}
            <div className="grid grid-cols-3 gap-2 w-60 h-80">
                <button 
                onClick={()=>{
                    setDisplay(display+0)
                }}
                className="bg-gray-300 rounded p-2">0</button>
                <button 
                onClick={()=>{
                    setDisplay(display+1)
                }}
                className="bg-gray-300 rounded p-2">1</button>
                <button 
                onClick={()=>{
                    setDisplay(display+2)
                }}
                className="bg-gray-300 rounded p-2">2</button>
                <button 
                onClick={()=>{
                    setDisplay(display+3)
                }}
                className="bg-gray-300 rounded p-2">3</button>
                <button 
                onClick={()=>{
                    setDisplay(display+4)
                }}
                className="bg-gray-300 rounded p-2">4</button>
                <button 
                onClick={()=>{
                    setDisplay(display+5)
                }}
                className="bg-gray-300 rounded p-2">5</button>
                <button 
                onClick={()=>{
                    setDisplay(display+6)
                }}
                className="bg-gray-300 rounded p-2">6</button>
                <button 
                onClick={()=>{
                    setDisplay(display+7)
                }}
                className="bg-gray-300 rounded p-2">7</button>
                <button 
                onClick={()=>{
                    setDisplay(display+8)
                }}
                className="bg-gray-300 rounded p-2">8</button>
                
                <button 
                onClick={()=>{
                    setDisplay(display+9)
                }}
                className="bg-gray-300 rounded p-2">9</button>
                <button 
                onClick={()=>{
                    setDisplay(display.slice(0, -1))
                }}
                className="bg-red-300 rounded p-2 span-2">
                    apagar
                </button>
                

            </div>
        </div>
    )
}