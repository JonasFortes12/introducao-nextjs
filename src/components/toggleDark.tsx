
type proops = {
    isDark: boolean, 
    onToggle: () => void;
}

export function ToggleDark({onToggle, isDark} : proops)  {
    return (
        <button onClick={onToggle}
        className="
        bg-blue-500 text-white py-2 px-4
        rounded
        ">
            { isDark ? 'Toggle Ligth' : 'Toggle Dark'}
        </button>
    )
}