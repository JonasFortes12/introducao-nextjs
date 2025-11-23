import FeedPage from "@/components/FeedPage"

const posts = [
  {
    title: "Post 1",
    text: "Hoje eu fui jogar bola e meu amigo morreu",
    author: "Amigo do falecido"
  },
  {
    title: "Post 2",
    text: "Trump tá vivo?",
    author: "hate do Trump"
  },
  {
    title: "Post 3",
    text: "Mó vergonha de quem vê Carlinhos Maia",
    author: "Hate do Caralinho Maia"
  },
  {
    title: "Post 4",
    text: "Será que o hexa vem próximo ano?",
    author: "Devolve_o_ouro_Portugal"
  }
]

export default function FeedSocialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight">
        Niwit
      </h1>
      <p className="text-gray-500 text-sm mb-10">
        Compartilhe momentos, histórias e ideias
      </p>
      <div className="max-w-2xl">
        <h3 className="mb-6 font-bold text-2xl text-blue-800 border-b-2 border-blue-200 pb-2">
          Posts Mais Recentes
        </h3>
        <FeedPage posts={posts} />
      </div>
    </div>
  )
}
