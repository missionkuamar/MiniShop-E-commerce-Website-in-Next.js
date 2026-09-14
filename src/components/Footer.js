export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} MiniShop — All rights reserved.</p>
      <p className="text-sm text-gray-500 mt-1">
        Built with Next.js App Router + Tailwind CSS
      </p>
    </footer>
  );
}