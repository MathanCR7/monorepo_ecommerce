import ProductCard from "../(components)/home/ProductCard";
import { mockProducts } from "@/lib/mock-data";

export default function AllProductsPage() {
  // In a real app, fetch all products, maybe with pagination
  const allProducts = [...mockProducts, ...mockProducts]; // Just duplicating for more items

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Shop All Products</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}