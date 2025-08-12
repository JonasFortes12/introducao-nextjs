"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes((prev) => prev + 1); // Incrementa sempre +1
  };

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center gap-2 
        p-3 rounded-full 
        border border-gray-300 
        shadow-sm hover:shadow-md 
        transition-all duration-200 
        hover:scale-105 
        bg-white
      `}
    >
      <Heart
        className="w-7 h-7 text-red-500 fill-red-500 transition-all duration-200"
      />
      <span className="text-base font-semibold text-gray-800">
        {likes}
      </span>
    </button>
  );
}
