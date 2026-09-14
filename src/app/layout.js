

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata ={
  title: "miniShop - Small E-commerce Store",
  description: "A small e-commerce store built with Next.js and Tailwind CSS",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="bg-gray-500 flex flex-col min-h-screen">
         <Navbar />
         <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
          {children}
         </main>
         <Footer />
      </body>
    </html>
  );
}
