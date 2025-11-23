'use client'

import { useState } from "react"


export default function MiniDisplay() {

    const [display, setDisplay] = useState('')
    // const []

    const backspace = () => {
        setDisplay(display.slice(0,-1))
    }


    const calculate = () => {
        if (display.includes('+')){
            soma()
        }
        else if(display.includes('-')){
            subtraction()
        }
        else if(display.includes('*')){
            product()
        }
        else if(display.includes('/')){
            divi()
        }
    }

    const soma = () => {
        const values = display.split('+')
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
            0
        )
        setDisplay(String(result))
    }

    const subtraction = () => {
        const values = display.split("-") 
        const numberValues = values.map((value)=>Number(value))// [1, 1]

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora - valorAtual
            
        )
        setDisplay(String(result))
    }
    // Fução para a operação de Multiplicação
    const product = () => {
        const values = display.split("*") //"55+67" -> ["1", "1"]
        const numberValues = values.map((value)=>Number(value))// [1, 1]

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora * valorAtual
            
        )
        setDisplay(String(result))
    }

    const divi = () => {
        const values = display.split("/") //"55+67" -> ["1", "1"]
        const numberValues = values.map((value)=>Number(value))// [1, 1]

        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora / Number(valorAtual)
            
        )
        setDisplay(String(result))
    }

    return(
        <div className="flex flex-col items-center mt-10">
            {/* display */}
            <div className="flex justify-center items-center rounded
            px-4 mx-2 w-60 h-15 mb-5 text-center text-xl  border border-gray-400">
                {display.slice(0, 15)}
            </div>
            {/* teclado numerico */}
            <div className="grid grid-cols-4 gap-2 w-60 h-80">
                <button 
                onClick={()=>{
                    setDisplay(display+0)
                }}
                className="bg-gray-200 rounded p-2">0</button>
                <button 
                onClick={()=>{
                    setDisplay(display+1)
                }}
                className="bg-gray-200 rounded p-2">1</button>
                <button 
                onClick={()=>{
                    setDisplay(display+2)
                }}
                className="bg-gray-200 rounded p-2">2</button>
                <button 
                onClick={()=>{
                   setDisplay('')
                }}
                className="bg-amber-500 rounded p-1 text-2xl">C</button>
                <button 
                onClick={()=>{
                    setDisplay(display+3)
                }}
                className="bg-gray-200 rounded p-2">3</button>
                <button 
                onClick={()=>{
                    setDisplay(display+4)
                }}
                className="bg-gray-200 rounded p-2">4</button>
                <button 
                onClick={()=>{
                    setDisplay(display+5)
                }}
                className="bg-gray-200 rounded p-2">5</button>
                <button 
                onClick={()=>{
                    backspace()
                }}
                className="bg-red-600 rounded p-2 ">
                    apa
                </button>
                <button 
                onClick={()=>{
                    setDisplay(display+6)
                }}
                className="bg-gray-200 rounded p-2">6</button>
                <button 
                onClick={()=>{
                    setDisplay(display+7)
                }}
                className="bg-gray-200 rounded p-2">7</button>
                <button 
                onClick={()=>{
                    setDisplay(display+8)
                }}
                className="bg-gray-200 rounded p-2">8</button>
                
                <button 
                onClick={()=>{
                    setDisplay(`${display}*`)
                }}
                className="bg-gray-200 rounded p-1 text-2xl">x</button>
                <button 
                onClick={()=>{
                    setDisplay(display+9)
                }}
                className="bg-gray-200 rounded p-2">9</button>
                <button 
                onClick={()=>{
                    setDisplay(`${display}+`)
                }}
                className="bg-gray-200 rounded p-1 text-2xl">+</button>
                
                <button 
                onClick={()=>{
                    setDisplay(`${display}/`)
                }}
                className="bg-gray-200 rounded p-1 text-2xl">/</button>
                <button 
                onClick={()=>{
                    setDisplay(`${display}-`)
                }}
                className="bg-gray-200 rounded p-1 text-2xl">-</button> 
                <button 
                onClick={()=>{
                    calculate()
                }}
                className="bg-gray-200 col-start-1 col-end-5 rounded p-1 text-2xl">=</button>
                

            </div>
        </div>
    )
}