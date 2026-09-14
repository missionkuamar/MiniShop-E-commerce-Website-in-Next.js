export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About MiniShop</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        MiniShop is a small e-commerce demo built using{" "}
        <strong>Next.js App Router</strong>, <strong>Tailwind CSS</strong>, and{" "}
        <strong>JavaScript</strong>. Ye project sirf learning purpose ke liye
        banaya gaya hai — jisme routing, dynamic routes, components, aur
        realistic product data ka use kiya gaya hai.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Abhi koi database ya API integrate nahi ki gayi. Future me hum isme
        cart, checkout, aur backend bhi add karenge.
      </p>
    </div>
  );
}