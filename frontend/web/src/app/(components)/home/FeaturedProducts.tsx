import { mockProducts } from '@/lib/mock-data';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const products = mockProducts;

  return (
    <section className="bg-white dark:bg-black py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Our Fan Favorites
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hand-picked and freshly blended just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}