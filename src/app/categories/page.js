import Link from "next/link";
import { products, categories } from "@/data/products";

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Categories</h1>
      <p className="text-gray-500 mb-8">Browse products by category</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          const firstImg = products.find((p) => p.category === cat)?.image;

          return (
            <Link key={cat} href="/products">
              <div className="relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition group">
                <img
                  src={firstImg}
                  alt={cat}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
                  <h2 className="text-2xl font-bold">{cat}</h2>
                  <p className="text-sm text-gray-200">{count} products</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}