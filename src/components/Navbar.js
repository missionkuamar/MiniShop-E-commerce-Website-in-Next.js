import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold text-bold-400">
            🛒 MiniShop
            </Link>
            <ul className="flex gap-6 text-sm font-medium">

                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="/categories" className="hover:text-gray-300">Categories</Link></li>


                <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
        </nav>
    )
}