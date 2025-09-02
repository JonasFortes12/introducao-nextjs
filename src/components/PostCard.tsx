

interface PostCardProps {
  post: Post;
  onLike: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-md text-left hover:shadow-lg transition">
      <h2 className="font-semibold text-lg text-gray-900">{post.author}</h2>
      <p className="my-2 text-gray-700 text-sm">{post.content}</p>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition"
        onClick={() => onLike(post.id)}
      >
        ❤ {post.likes} Curtidas
      </button>
    </div>
  );
};

export default PostCard;