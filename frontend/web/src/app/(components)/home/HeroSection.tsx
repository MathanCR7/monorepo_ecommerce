import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 hero-background"
      ></div>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-48 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
          Taste the <span className="text-lime-300">Freshness</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Pure ingredients, blended to perfection. Discover a world of flavor that's both healthy and delicious.
        </p>
        <Link 
          href="/products" 
          className="bg-lime-500 text-green-900 font-bold px-8 py-4 rounded-full hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
        >
          Explore Our Menu
        </Link>
      </div>
    </section>
  );
}