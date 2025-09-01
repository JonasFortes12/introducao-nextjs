'use client'

import ToggleDark from "@/components/ToggleDark"
import { useState } from "react"


export default function DarlTheme() {

    const [isDark, setIsDark] = useState(false)

    const handleToggleTheme = () => {
        setIsDark(!isDark )
    }

    return (
        <div className={`h-screen  flex justify-center items-center flex-col ${isDark ? 'bg-black text-white' : 'bg-amber-500 text-white'}`}>
            <h1 className="text-4xl">Página {isDark ? 'DarkTheme' : 'LightTheme'}</h1>
            {/* <button className={`${isDark ? 'text-white bg-amber-500' : 'text-white bg-black '} px-4 py-2 rounded-2xl mt-4`} onClick={()=>{handleToggleTheme()}}>Click</button> */}
            <ToggleDark onToggle={handleToggleTheme} isDark={isDark}/>
        </div>
    )
}