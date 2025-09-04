"use client";

import LikeButton from "./LikeButton2";

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  isLiked: boolean;
}

interface PostCardProps {
  post: Post;
  onLike: (id: number) => void;
}

export default function PostCard({ post, onLike }: PostCardProps) {
  return (
    <div className="border rounded-xl shadow-md w-full p-2 mt-2 bg-white">
      <h2 className="font-semibold">{post.author}</h2>
      <p className="text-gray-700 mt-2">{post.content}</p>
      <LikeButton
        isLiked={post.isLiked}
        likes={post.likes}
        onToggle={() => onLike(post.id)}
      />
    </div>
  );
}
