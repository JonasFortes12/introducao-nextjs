'use client'

import Tabuleiro from "@/components/jogoDaMemoria/tabuleiro";

const cards = [
    {
        icon: '🚀',
        revelado: false
    },
    {
        icon: '🔒',
        revelado: false
    },
    {
        icon: '❤️',
        revelado: false
    },
    {
        icon: '🎨',
        revelado: false
    },
    {
        icon: '💀',
        revelado: false
    },
    {
        icon: '😎',
        revelado: false
    },
    {
        icon: '🎨',
        revelado: false
    },
    {
        icon: '😎',
        revelado: false
    },
    {
        icon: '🔒',
        revelado: false
    },
    {
        icon: '🚀',
        revelado: false
    },
    {
        icon: '❤️',
        revelado: false
    },
    {
        icon: '🤢',
        revelado: false
    },
    {
        icon: '😒',
        revelado: false
    },
    {
        icon: '🤢',
        revelado: false
    },
    {
        icon: '💀',
        revelado: false
    },
    {
        icon: '😒',
        revelado: false
    },
]


export default function JogoDaMemoria() {
    return (
        <div>
            <Tabuleiro
                cards={cards}
            />
        </div>
    )
}