'use client'

import { useState } from "react"


export default function MiniDisplay() {

    const [display, setDisplay] = useState('')

    const calculate = () => {
        if(display.includes('+')) {
            sun()
        } else if(display.includes('-')){
            sub( )
        }
    }

    const sun  = () => {
        const values = display.split('+')
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual), 0
        )
        setDisplay(String(result))

    }

    const sub  = () => {
        const values = display.split('-')
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora - Number(valorAtual), 0
        )
        setDisplay(String(result))

    }

    const mul  = () => {
        const values = display.split('x')
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora * Number(valorAtual), 0
        )
        setDisplay(String(result))

    }


    return(
        <div className="flex flex-col items-center m-10">
            {/* display */}
            <div className="flex justify-center items-center rounded
            p-4 w-60 h-15 mb-5 text-center text-xl border maxLength={2} border-gray-400">
                {display.slice(0, 15)}
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
                    setDisplay(`${display}+`)
                }}
                className="bg-gray-300 rounded p-2">+</button>
                <button 
                onClick={()=>{
                    setDisplay(`${display}-`)
                }}
                className="bg-gray-300 rounded p-2">-</button>
                <button 
                onClick={()=>{
                    setDisplay(`${display}*`)
                }}
                className="bg-gray-300 rounded p-2">x</button>
                <button 
                onClick={()=>{
                    sun()
                    sub()
                    mul()
                }}
                className="bg-gray-300 rounded p-2">=</button>
                <button 
                onClick={()=>{
                    setDisplay(display.slice(0, -1))
                }}
                className="bg-red-600 rounded col-start-1 col-end-4 p-2 span-2">
                    Backspace
                </button>
                

            </div>
        </div>
    )
}