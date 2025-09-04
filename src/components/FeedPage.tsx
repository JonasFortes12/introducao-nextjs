"use client"

import { useState } from "react";
import PostCard from "./PostCard";

type Post = {
  id: number;
  author: string;
  content: string;
  likes: number;
  isLiked: boolean;
};

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 456, author: "Raimunda Zika", content: "#amoanatureza #vidanatural #viverebom", likes: 2, isLiked: false },
    { id: 798, author: "Francisco Padeiro", content: "Pães fresquinhos você só encontra aqui!", likes: 7, isLiked: false },
    { id: 321, author: "Dante Matos", content: "Pelo mundo sendo eu! 🌏", likes: 28, isLiked: false },
    { id: 554, author: "Kleber Venicios", content: "Corte dahora de hoje💈😎", likes: 35, isLiked: false },
    { id: 751, author: "Sandra Lúcia", content: "Minha rosa do deserto linda e charmosa😍", likes: 12, isLiked: false },
  ]);

  const handleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="gap-4 ">
      <h1 className="text-2xl font-bold"> Feed </h1>
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}
