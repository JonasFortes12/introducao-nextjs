

type props = {
    onToggle: () => void
    isDark: boolean
}

export default function ToggleDark({onToggle, isDark}:props) {
    return (
        <button onClick={onToggle} className="bg-blue-600 mt-5 text-white py-2 px-4 rounded">
            {isDark ? 'Toggle Ligth': 'Toggle Dark'}
        </button>
    )
}