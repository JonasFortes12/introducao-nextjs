
type props = {
    isDark: boolean,
    onToggle: () => void;
}

export function ToggleDark({onToggle, isDark} : props) {
    return (
        <button onClick={onToggle}
         className="
        bg-blue-500 text-white py-2 px-4
        rounded">
            { isDark ? 'Toggle Light' : 'Toggle Dark'}
        </button>
    )
}