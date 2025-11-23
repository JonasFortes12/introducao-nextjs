'use client'

import { useState, useEffect } from "react"

type Card = {
  icon: string
  revelado: boolean
}

type Props = {
  cards: Card[]
}

export default function Tabuleiro({ cards }: Props) {
  const [cardList, setCardList] = useState<Card[]>(cards)
  const [selecionados, setSelecionados] = useState<number[]>([])
  const [contador, setContador] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [started, setStarted] = useState(false)

  const Fim = ()=>{
    return (
        <div className="flex text-white p-4 bg-amber-400 text-center rounded-2xl animate-bounce flex-col items-center m-5">
           <h2 className="font-bold text-2xl">Parabêns! Você concluiu o jogo</h2>
           <p className="font-bold">Seu tempo é: {minutes.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}</p>
           <p className="font-bold">Sua Pontuação é: {contador}</p>
        </div>
      )
  }

  useEffect(()=>{
    if(contador === 8){
      setStarted(false)
    }
  })

  useEffect(() => {
    if (!started) return

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [started])

  const handleClick = (i: number) => {
    if (cardList[i].revelado || selecionados.length === 2) return

    if (!started) setStarted(true)

    const novos = [...cardList]
    novos[i].revelado = true
    const novosSel = [...selecionados, i]
    setCardList(novos)
    setSelecionados(novosSel)

    if (novosSel.length === 2) {
      const [a, b] = novosSel
      if (novos[a].icon !== novos[b].icon) {
        setTimeout(() => {
          novos[a].revelado = false
          novos[b].revelado = false
          setCardList([...novos])
        }, 800 )
      } else {
        setContador(contador + 1)
      }
      setSelecionados([])
    }
  }


  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  const resetar = () => {
    const resetados = cardList.map(card => ({ ...card, revelado: false }))
    setCardList(resetados)
    setSeconds(0)
    setContador(0)
    setStarted(false)
    setSelecionados([])
  }



  return (
    <div className="flex flex-col items-center gap-4">
      <div className="container bg-amber-400 text-white flex justify-around py-2.5 items-center">
        <p className="text-2xl font-bold">Pontos: {contador}</p>
        <div className="text-2xl font-bold">
          {minutes.toString().padStart(2, "0")}:
          {secs.toString().padStart(2, "0")}
        </div>
        <button
          onClick={resetar}
          className="text-2xl px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Resetar
        </button>
      </div>
        <h3 className="text-3xl text-amber-400 font-bold my-5">Jogo da Memória</h3>
      <div className="grid grid-cols-4 grid-rows-4 gap-2.5 mx-auto">
        {cardList.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex items-center justify-center h-20 w-20 bg-cyan-900 text-white font-bold rounded-lg shadow-md cursor-pointer select-none hover:scale-105 relative transition-transform duration-700 ${card.revelado ? 'rotate-y-180' : 'rotate-y-0'} `}>
            <span className={`text-3xl ${card.revelado ? " block" : "hidden"}`}>
              {card.icon}
            </span>
          </div>
        ))}
      </div>
      <div className={`${contador == 8 ? 'block' : 'hidden'}`}>
        <Fim/>
      </div>
    </div>
  )
}
