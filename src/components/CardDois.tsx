
type cardPorps = {
  title: string,
  description: string,
  imageUrl: string, 
  category: string
}

export function CardDois({ title, description, imageUrl, category }: cardPorps) {
  return (
    <div className="
      bg-blue-50
      border border-indigo-200 
      p-6 rounded-2xl 
      shadow-sm hover:shadow-lg 
      transition duration-300 
      text-center
      max-w-sm mx-auto
    ">
      <div className="flex justify-center mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-24 h-24 object-cover rounded-full shadow-md"
        />
      </div>

      <h3 className="text-2xl font-bold text-black mb-2">
        {title}
      </h3>

      <p className="text-gray-800 font-extrabold">
        {category}
      </p>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}