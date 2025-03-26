// // pages/CategoryProductsPage.jsx
// import { useParams } from "react-router-dom";
// import { latprod } from "../data/products.json";
// console.log(latprod);
// import { categories } from "../data/categories.json";
// import { motion } from "framer-motion";

// import { useEffect } from "react";
// import { Scroll } from "lucide-react";
// import ScrollToTop from "../components/ScrollToTop";

// export default function CategoryProductsPage() {
//   const { categoryId } = useParams();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [categoryId]);
//   // Find the selected category
//   const currentCategory = categories.find(
//     (cat) => cat.id === Number(categoryId)
//   );

//   // Filter products for this category
//   const categoryProducts = latprod.filter(
//     (product) => product.categoryId === Number(categoryId)
//   );

//   return (
//     <>
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -20, opacity: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-bold mb-8">{currentCategory?.title}</h1>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {categoryProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//                   <div className="flex gap-2">
//                     <p className="text-green-700 font-bold">${product.price}</p>
//                     <p>[{product.size}]</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//       <ScrollToTop />
//     </>
//   );
// }

import { useParams, Link } from "react-router-dom";
import { latprod } from "../data/products.json";
import { categories } from "../data/categories.json";
import { motion } from "framer-motion";
import { useEffect } from "react";


export default function CategoryProductsPage() {
  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const currentCategory = categories.find(
    (cat) => cat.id === Number(categoryId)
  );

  const categoryProducts = latprod.filter(
    (product) => product.categoryId === Number(categoryId)
  );

  if (!currentCategory) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Category not found</h2>
        <Link
          to="/"
          className="text-green-600 hover:underline mt-4 inline-block"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              {currentCategory.title}
            </h1>
            <p className="mt-2 text-gray-600">
              {
                categories.find((cat) => cat.id === currentCategory.id)
                  ?.description
              }
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl
                  transition-shadow duration-300"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <figure className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-green-700 font-bold text-lg mb-3">
                      {product.price}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.bestFor.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
      
    </>
  );
}
