
type ButtonProps = {
    label: string
}

export default function Button({label}: ButtonProps ) {
  return (
    <button
      className=" mx-1.5 px-4 py-2 bg-amber-400 text-white"
    >
    {label}
    </button>
  );
}
