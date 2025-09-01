

"use client"

import { useState } from "react"

import PostCard from "./PostCard"

type Post = {
    id: number;
    author: string;
    content: string;
    likes: number;
}

const [posts, setPosts] = useState<Post[]>([
  { id: 1, author: "Mundico", content: "Amo meus animais! 🐶🐱❤️", likes: 6 },
  { id: 2, author: "Zé Risadinha", content: "Hoje estou muito feliz! 😄🌞🎉", likes: 8 },
  { id: 3, author: "Bolotinha", content: "Curtindo o dia! 🌳☕🍪", likes: 9 },
])

const PostGostos = (postId: number) => {
    setPosts((prevPosts) =>
        
)
}
