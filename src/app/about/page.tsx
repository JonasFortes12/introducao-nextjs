import EffectCounter from "@/components/EffectCounter";
import Lampada from "@/components/Lampada";
import MiniDisplay from "@/components/miniDisplay";
import LikeButton from "@/components/LikeButton2";
import MusicReprodution from "@/components/BotaoReproducao";
import ShoppingList from "@/components/ListaDeCompras";
import FeedPage from "@/components/FeedPage";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <FeedPage/>
      
    </div>
  );
}

