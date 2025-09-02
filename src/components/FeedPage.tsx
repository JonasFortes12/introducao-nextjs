

"use client";
import React, { useState } from "react";
import PostCard from "./PostCard";

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
}

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, author: "Lucas", content: "A vida é cheia de surpresas.", likes: 7 },
    { id: 2, author: "Ana", content: "Hoje o dia está maravilhoso!", likes: 9 },
    { id: 3, author: "Pedro", content: "Nada como um bom café para começar.", likes: 12 },
  ]);

  const handleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Feed</h1>
      <div className="w-full max-w-md space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;