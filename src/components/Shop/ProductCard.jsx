export default function ProductCard({ img, badge, name, price, oldPrice }) {
  return (
    <div className="relative">

      {/* Badge */}
      {badge && (
        <span className="absolute top-3 left-3 text-white bg-[#5E5249] text-xs px-3 py-1 rounded-sm">
          {badge}
        </span>
      )}

      {/* Image Box */}
      <div className="bg-[#F3F3F3] h-[350px] flex items-center justify-center rounded-md">
        <img src={img} className="w-[70%] object-fill" />
      </div>

      {/* Title */}
      <p className="mt-4 text-lg font-medium text-[#2D3E3F]">{name}</p>

      {/* Price */}
      <div className="text-gray-700 mt-1">
        {oldPrice && (
          <span className="line-through mr-2 text-gray-400">{oldPrice}</span>
        )}
        <span>{price}</span>
      </div>
    </div>
  );
}
