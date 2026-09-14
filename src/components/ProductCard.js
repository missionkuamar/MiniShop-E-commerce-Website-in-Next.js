import Link from "next/link";


export default function ProductCard({ product }) {
    return (
      <Link href={`/products/${product.id}`}>
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
          
          <img 
          src={product?.image}
          alt={product?.name}
          className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <p className="text-xs text-blue-500 font-semibold uppercase ">
                {product?.category}
            </p>
            <h3 className="font-bold text-lg text-gray-800 mt-1 truncate">
                {product?.name}
            </h3>

            <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                {product?.description}
            </p>

               <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-lg font-bold text-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-400 line-through ml-2">
                ₹{product.oldPrice.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-yellow-500 font-semibold">
              ⭐ {product.rating}
            </span>
          </div>
          </div>
        </div>
      </Link>
    )
}