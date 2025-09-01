import { Heart } from "lucide-react"

type Props = {
  title: string
  text: string
  author: string
  likes?: number
  onLike: () => void
}

export default function PostCard({ title, text, author, likes = 0, onLike }: Props) {
  return (
    <div className="bg-white w-full  mb-6 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <h1 className="text-xl font-bold text-blue-900 mb-2">{title}</h1>
      <p className="text-gray-700 leading-relaxed mb-4">{text}</p>
      <p className="text-sm text-gray-500">
        Postado por: <span className="font-medium text-gray-600">{author}</span>
      </p>
      <div className="flex justify-end mt-5">
        <button
          onClick={onLike}
          className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-red-50 transition-colors duration-200"
        >
          <Heart
            size={22}
            className={`transition-all ${
              likes > 0 ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
          <span className="text-gray-600 font-semibold">{likes}</span>
        </button>
      </div>
    </div>
  )
}
