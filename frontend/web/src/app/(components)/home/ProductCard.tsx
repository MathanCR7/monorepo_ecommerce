import { Product } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    // --- CHANGES APPLIED HERE ---
    <Link href={`/product/${product.id}`} className="group block overflow-hidden bg-white dark:bg-black rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-lime-500 dark:hover:border-lime-400 transform hover:-translate-y-1">
      <div className="relative h-64">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-lime-400 text-green-900 text-xs font-bold px-2.5 py-1 rounded-full">NEW</span>
        )}
        {product.onSale && (
           <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">SALE</span>
        )}
      </div>
      {/* --- CHANGES APPLIED HERE --- */}
      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        <h3 className="text-lg font-semibold text-black dark:text-white mt-1 truncate group-hover:text-green-600 dark:group-hover:text-lime-400">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-black dark:text-white mt-1">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}