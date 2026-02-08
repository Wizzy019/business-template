

const ProductCard = ({ product, onAction, actionLabel }) => {
  const { image_url, name, price, brand } = product;

  return (
    <div className="w-fit flex md:flex-col border border-blue-400 rounded-lg overflow-hidden hover:shadow-md transition">
      
      {/* Image */}
      <div className="h-48 bg-gray-100">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{price}</p>
        <p className="text-gray-500 text-xl">{brand}</p>

        <button
          onClick={() => onAction(product)}
          className="mt-2 border rounded px-3 py-2 text-sm hover:bg-blue-500 hover:text-white transition"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;