"use client"
import { useState } from "react"


export default function MiniDisplay() {

    const [display, setDisplay] = useState("")

    const backspace = () => {
        setDisplay(display.slice(0,-1))
    }

    const calculate = () => {
        try {
          setDisplay(String(new Function(`return ${display}`)()))
        } catch {
          setDisplay("Erro")
        }
    }

    // Função para a operação de Adição 
    const sun = () => {
        const values = display.split("+") 
        
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
            0
        )
        setDisplay(String(result))
    }

    // Função para a operação de Subtração
    const subtraction = () => {
        const values = display.split("-") 
        const numberValues = values.map((value)=>Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora - valorAtual
            
        )
        setDisplay(String(result))
    }

    // Função para a operação de Multiplicação
    const product = () => {
        const values = display.split("*") 
        const numberValues = values.map((value)=>Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora * valorAtual
            
        )
        setDisplay(String(result))
    }

    // Função para a operação de Divisão
    const div = () => {
        const values = display.split("/") 
        const numberValues = values.map((value)=>Number(value))

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora / valorAtual
            
        )
        setDisplay(String(result))
    }


    return (
        <div className="flex flex-col items-center my-10 border border-black rounded p-5 h-100 bg-blue-100">
            
            {/* Display */}
            <div className="flex justify-center overflow-x-auto
                items-center border border-gray-400 rounded 
                p-2 w-40 h-14 text-center text-xl">
                {display}
            </div>

            {/* Teclado Numérico */}
            <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
                <button 
                className="bg-gray-400 p-2 rounded"
                onClick={() =>{ setDisplay(display + "0") }}
                >
                    0
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "1") }}
                className="bg-gray-400 p-2 rounded">
                    1
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "2") }}
                className="bg-gray-400 p-2 rounded">
                    2
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "3") }}
                className="bg-gray-400 p-2 rounded">
                    3
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "4") }}
                className="bg-gray-400 p-2 rounded">
                    4
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "5") }}
                className="bg-gray-400 p-2 rounded">
                    5
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "6") }}
                className="bg-gray-400 p-2 rounded">
                    6
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "7") }}
                className="bg-gray-400 p-2 rounded">
                    7
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "8") }}
                className="bg-gray-400 p-2 rounded">
                    8
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "9") }}
                className="bg-gray-400 p-2 rounded">
                    9
                </button>


                {/* Botão Soma */}
                <button 
                onClick={() =>{setDisplay(`${display}+`)}}
                className="bg-emerald-600 p-2 rounded">
                 +
                </button>

                {/* Botão Subtração */}
                <button 
                onClick={() =>{setDisplay(`${display}-`)}}
                className="bg-emerald-600 p-2 rounded">
                 -
                </button>


                {/* Botão Apagar tudo */}
                <button 
                onClick={() =>{ setDisplay("")}}
                className="bg-amber-600 p-2 rounded">
                 C
                </button>

                
                {/* Botão Multiplicação */}
                <button 
                onClick={() =>{setDisplay(`${display}*`)}}
                className="bg-emerald-600 p-2 rounded">
                 *
                </button>

                 {/* Botão Divisão */}
                <button 
                onClick={() =>{setDisplay(`${display}/`)}}
                className="bg-emerald-600 p-2 rounded">
                 /
                </button>

                
                {/* Botão Resultado */}
                <button 
                onClick={() =>{calculate()}}
                className="bg-red-500 p-2 rounded">
                 =
                </button>


                {/* Botão Apagar */}
                <button 
                onClick={() =>{backspace()}}
                className="bg-amber-600 p-2 rounded col-span-2">
                 backspace
                </button>
            </div>

        </div>
    )
}