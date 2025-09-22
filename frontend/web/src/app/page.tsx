import HeroSection from "./(components)/home/HeroSection";
import FeaturedProducts from "./(components)/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      {/* You can add more sections here like promotions, categories, etc. */}
    </>
  );
}