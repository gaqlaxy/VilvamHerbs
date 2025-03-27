import { useParams, Link } from "react-router-dom";
import { latprod } from "../data/products.json";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Add this import

// import ScrollToTop from "../components/ScrollToTop";

export default function ProductPage() {
  const { addToCart } = useCart(); // Get addToCart function from context

  // 1. Get product ID from URL
  const { productId } = useParams();

  // 2. Find product in products.json data
  const product = latprod.find(product => product.id === productId);

  // 3. Handle missing product
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link 
          to="/" 
          className="mt-4 inline-block text-green-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // 4. Display product details
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            
           

            <div className="flex gap-2 items-center">
            <p className="text-green-700 text-2xl font-bold">
              ${product.price}
            </p>
              <p>[{product.size}]</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc pl-6 space-y-1">
                {product.ingredients.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Best For</h3>
              <div className="flex flex-wrap gap-2">
                {product.bestFor.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button onClick={() => addToCart(product)} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
      {/* <ScrollToTop /> */}
    </>
  );
}