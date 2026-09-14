import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


export default function ProductsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">All Products</h1>
            <p className="text-gray-500 mb-8">Total {products.length} products available</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}