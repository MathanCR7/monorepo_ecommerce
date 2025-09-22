export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          {/* BRANDING: Changed name and description */}
          <h3 className="text-lg font-serif font-bold mb-4">The Fruit Bowl & Co.</h3>
          <p className="text-green-200">Fresh, natural ingredients blended for a healthy and delicious lifestyle.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Our Products</h4>
          {/* THEME: Updated links to be fruit-based */}
          <ul className="space-y-2">
            <li><a href="#" className="text-green-200 hover:text-white transition-colors duration-300">Smoothies</a></li>
            <li><a href="#" className="text-green-200 hover:text-white transition-colors duration-300">Juices</a></li>
            <li><a href="#" className="text-green-200 hover:text-white transition-colors duration-300">Fruit Bowls</a></li>
            <li><a href="#" className="text-green-200 hover:text-white transition-colors duration-300">All Blends</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-green-200 hover:text-white transition-colors duration-300">Contact Us</a></li>
            <li><a href="#" className="text-green-200 hover:text-white transition-colors duration-300">Our Story</a></li>
            <li><a href="#" className="text-green-200 hover:text-white transition-colors duration-300">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <p className="text-green-200 mb-4">Sign up for our newsletter to get the latest deals.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="bg-green-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-lime-400" />
            <button className="bg-lime-500 text-green-900 font-bold px-4 py-2 rounded-r-md hover:bg-lime-400 transition-colors duration-300">Go</button>
          </div>
        </div>
      </div>
      <div className="text-center text-green-300 mt-10 border-t border-green-800 pt-6">
        © {new Date().getFullYear()} The Fruit Bowl & Co. All Rights Reserved.
      </div>
    </footer>
  );
}