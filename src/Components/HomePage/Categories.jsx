import { Link } from "react-router-dom";
import { categories } from "../../data/categories.json";


export default function CategoriesGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#d7fffe]" name="categories">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore Our Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-[800px]">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative ${category.colSpan} ${category.rowSpan} 
                rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-gray-900/20" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3
                  className={`font-bold ${
                    category.isMain ? "text-3xl" : "text-xl"
                  } mb-2`}
                >
                  {category.title}
                </h3>
                <Link
                  to={`/category/${category.id}`}
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from "react";
//  import { Link } from 'react-router-dom';
// import { categories } from "../../data/products.json";
// export default function CategoriesGrid() {

//     return (
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#d7fffe]">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//             Explore Our Categories
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-[800px]">
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 className={`group relative ${category.colSpan} ${category.rowSpan}
//                   rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl`}
//               >
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-gray-900/20" />

//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <h3 className={`font-bold ${category.isMain ? 'text-3xl' : 'text-xl'} mb-2`}>
//                     {category.title}
//                   </h3>
//                   <Link
//                    to={`/category/${category.id}`}
//                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition-colors"
//                  >
//                    Shop Now
//                 </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
