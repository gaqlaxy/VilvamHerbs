// import React from "react";

// export default function FeaturedProducts() {
//   return (
//     <>
     

//       <div>
//         <h1 className="text-4xl text-[#0e402d] font-bold text-center my-12">
//           Featured Products
//         </h1>
//         <div className="grid grid-cols-2 gap-5 p-6 m-6">
//           <div
//             className="relative overflow-hidden"
//             style={{
//               clipPath: "url(#clip-shape)",
//             }}
//           >
           
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="477"
//               height="484"
//               fill="none"
//               viewBox="0 0 477 484"
//             >
//               <path
//                 fill="#D9D9D9"
//                 fill-rule="evenodd"
//                 d="M296.655 20c0-11.046 8.954-20 20-20h140.097c11.046 0 20 8.954 20 20v140.649c0 11.045-8.954 20-20 20H443.93c-11.046 0-20 8.954-20 20v210.44c0 11.045-8.955 20-20 20H191.467c-11.045 0-20 8.954-20 20v11.922c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V335.543c0-11.046 8.954-20 20-20h17.406c11.045 0 20-8.954 20-20V82.587c0-11.046 8.954-20 20-20h199.249c11.046 0 20-8.954 20-20V20Z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//           </div>

//           <div>
//             <p className="text-3xl mt-12 mb-1">Our Products are</p>
//             <p className="text-4xl text-[#0e402d] font-bold mb-3">
//               Natural and Organic
//             </p>

//             <p className="mb-10">
//               We believe beauty is more than skip deep, it's about nuturing your
//               natural glow from within. Founded with a passion for clean
//               effective skincare
//             </p>
//             <a href="" className="readmore tracking-wide">
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";

export default function FeaturedProducts() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-[#0e402d] font-bold text-center my-12">
          Featured Product
        </h1>
        <div className="grid grid-cols-2 gap-5 p-6 m-6">
          {/* Image inside SVG */}
          <div className="relative overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="477"
              height="484"
              fill="none"
              viewBox="0 0 477 484"
            >
              {/* Define Clipping Path */}
              <defs>
                <clipPath id="featuredImageClip">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M296.655 20c0-11.046 8.954-20 20-20h140.097c11.046 0 20 8.954 20 20v140.649c0 11.045-8.954 20-20 20H443.93c-11.046 0-20 8.954-20 20v210.44c0 11.045-8.955 20-20 20H191.467c-11.045 0-20 8.954-20 20v11.922c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V335.543c0-11.046 8.954-20 20-20h17.406c11.045 0 20-8.954 20-20V82.587c0-11.046 8.954-20 20-20h199.249c11.046 0 20-8.954 20-20V20Z"
                  />
                </clipPath>
              </defs>

              {/* Image inside SVG */}
              <foreignObject
                x="0"
                y="0"
                width="477"
                height="484"
                clipPath="url(#featuredImageClip)"
              >
                <img
                  src="scent.jpg" // Update with actual image path
                  alt="Featured Product"
                  className="w-full h-full object-cover"
                />
              </foreignObject>
            </svg>
          </div>

          {/* Text Content */}
          <div>
            
            <p className="text-4xl text-[#0e402d] font-bold mb-3">
              Herbal Fragrance
            </p>
            <p className="mb-10">
              We believe beauty is more than skin deep, it's about nurturing your
              natural glow from within. Founded with a passion for clean,
              effective skincare.
            </p>
            <a href="#" className="readmore tracking-wide">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
