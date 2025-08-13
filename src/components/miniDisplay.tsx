"use client"
import { useState } from "react"


export default function MiniDisplay() {

    const [display, setDisplay] = useState("")

    const backspace = () => {
        setDisplay(display.slice(0,-1))
    }




    const sun = () => {
        const values = display.split("+") //"55+67" -> ["1", "2", "3", "4"]
        
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
            0
        )
        setDisplay(String(result))
    }

    // Fução para a operação de Subtração
    // Fução para a operação de Multiplicação


    return (
        <div className="flex flex-col items-center mt-10">
            
            {/* display */}
            <div className="flex justify-center overflow-x-auto
                items-center border border-gray-400 rounded 
                p-2 w-40 h-14 text-center text-xl">
                {display}
            </div>

            {/* teclado numérico */}
            <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
                <button 
                className="bg-blue-300 p-2 rounded"
                onClick={() =>{ setDisplay(display + "0") }}
                >
                    0
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "1") }}
                className="bg-blue-300 p-2 rounded">
                    1
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "2") }}
                className="bg-blue-300 p-2 rounded">
                    2
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "3") }}
                className="bg-blue-300 p-2 rounded">
                    3
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "4") }}
                className="bg-blue-300 p-2 rounded">
                    4
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "5") }}
                className="bg-blue-300 p-2 rounded">
                    5
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "6") }}
                className="bg-blue-300 p-2 rounded">
                    6
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "6") }}
                className="bg-blue-300 p-2 rounded">
                    7
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "6") }}
                className="bg-blue-300 p-2 rounded">
                    8
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "6") }}
                className="bg-blue-300 p-2 rounded">
                    9
                </button>

                <button 
                onClick={() =>{ setDisplay("")}}
                className="bg-violet-300 p-2 rounded">
                 C
                </button>

                {/* Botão Soma */}
                <button 
                onClick={() =>{setDisplay(display+"+")}}
                className="bg-green-500 p-2 rounded">
                 +
                </button>

                <button 
                onClick={() =>{backspace()}}
                className="bg-violet-300 p-2 rounded col-span-2">
                 backspace
                </button>

                <button 
                onClick={() =>{sun()}}
                className="bg-amber-400 p-2 rounded">
                 =
                </button>
            </div>

        </div>
    )
}