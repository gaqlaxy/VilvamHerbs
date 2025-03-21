// pages/CategoryProductsPage.jsx
import { useParams } from "react-router-dom";
import { latprod } from "../data/products.json";
console.log(latprod);
import { categories } from "../data/categories.json";
import { motion } from "framer-motion";

import { useEffect } from "react";

export default function CategoryProductsPage() {
  const { categoryId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);
  // Find the selected category
  const currentCategory = categories.find(
    (cat) => cat.id === Number(categoryId)
  );

  // Filter products for this category
  const categoryProducts = latprod.filter(
    (product) => product.categoryId === Number(categoryId)
  );

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">{currentCategory?.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-green-700 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
