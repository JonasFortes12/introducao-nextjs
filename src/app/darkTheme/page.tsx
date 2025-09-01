"use cliente"

import { ToggleDark } from "@/components/ui/toggleDark"
import { useState } from "react"

export default function DarkTheme() {

    const [isDark, setIsDark] = useState(true)

    const handleToggleTheme= () => (
        setIsDark(isDark => !isDark)
    )

    return(
        <div className="h-screen
        flex flex-col justify-center items-center
        transition-all duration-700
        ${isDark ? 'bg-gray-900 text-white' 
        : 'bg-amber-50 text-black' }
        ">

            <h1>Página {isDark
            ? 'Dark Theme' : 'Light Theme'}</h1>
            <ToggleDark onToggle={handleToggleTheme} isDark= {isDark}/>
        </div>
    )
}