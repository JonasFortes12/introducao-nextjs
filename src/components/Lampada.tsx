import Image from "next/image"
import { useState } from "react"


export default function Lampada() {

    const urldesligado = '/image/lampadadesligada.png'
    const urlligado = '/image/lampadaligada.png'
    const botaodesligado = '/image/botaodesligado.png'
    const botaoligado = '/image/botaoligado.png'

    const [lampadaurl, setLampadaurl] = useState(urldesligado) 
    const [botao, setBotao] = useState(botaodesligado) 

    function Alternar() {
        if(lampadaurl == urlligado) {
            setLampadaurl(urldesligado)
            setBotao(botaodesligado) 
        } else {
            setLampadaurl(urlligado)
            setBotao(botaoligado)
        }
    }


    //

    return (
        <div className="flex flex-col items-center">
            <div>
            <Image
            src={lampadaurl}
            alt="sla"
            width={300}
            height={300}
            />
            </div>
            <button  onClick={()=>{Alternar()}}>
                <Image
                src={botao}
                alt='sla'
                width={100}
                height={100}
                />
            </button>
        </div>
    )
}