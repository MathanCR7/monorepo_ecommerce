import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher'; // DARK MODE: Import ThemeSwitcher

export default function Header() {
  return (
    <header className="bg-stone-50/80 dark:bg-gray-900/80 shadow-sm sticky top-0 z-50 border-b border-stone-200 dark:border-gray-800 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-100">
          The <span className="text-green-700 dark:text-lime-400">Fruit Bowl</span> & Co.
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-lime-400 transition-colors">Our Blends</Link>
          <Link href="/categories" className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-lime-400 transition-colors">Categories</Link>
          <Link href="/offers" className="text-orange-500 font-semibold hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors">Special Offers</Link>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher /> {/* DARK MODE: Add the toggle button */}
          <Link href="/cart" className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </Link>
          <Link href="/login" className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 dark:bg-lime-500 dark:text-green-900 dark:hover:bg-lime-400 transition-colors">
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
}