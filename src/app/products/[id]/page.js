import Link from "next/link";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductDetailsPage({ params }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <div>
      <Link href="/products" className="text-blue-600 hover:underline text-sm">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 bg-white p-6 rounded-2xl shadow">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div>
          <p className="text-xs text-blue-500 font-semibold uppercase">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-yellow-500 font-semibold">
              ⭐ {product.rating}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-lg text-gray-400 line-through ml-3">
              ₹{product.oldPrice.toLocaleString()}
            </span>
            <span className="ml-3 text-green-600 font-semibold text-sm">
              {Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              )}
              % OFF
            </span>
          </div>

          <p
            className={`mt-4 font-medium ${
              product.inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}