// import React from "react";

// export default function HeroSection() {
//   return (
//     <>
//       <div
//         className="h-full w-full flex justify-center items-center"
//         name="hero"
//       >
//         <svg className="svg-defs" aria-hidden="true">
//           <defs>
//             <clipPath id="shapeVelyVely" clipPathUnits="userSpaceOnUse">
//               <path d="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z">
//                 <animate
//                   repeatCount="indefinite"
//                   attributeName="d"
//                   dur="5s"
//                   values="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;M452,360s31.156-141.666,162-214C733.647,79.855,810.23,42.3,872,38c137.68-9.583,190.04,91.324,252,220,0,0,74.98,148.733-17,274,0,0-66.6,95.241-196,130,0,0-94.546,15.779-250-60C504.522,540.92,426.292,455.009,452,360Z;M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;"
//                 ></animate>
//               </path>
//             </clipPath>
//           </defs>
//         </svg>

//         <div className="container">
//           <div className="pos-relative">
//             <div className="pos-absolute">
//               <svg
//                 viewBox="0 0 1600 700"
//                 preserveAspectRatio="xMidYMin meet"
//                 className="svga"
//               >
//                 <text
//                   dx="-40%"
//                   x="50%"
//                   y="50%"
//                   fill="#000"
//                   className="text is-left font-rubik"
//                 >
//                   Experience
//                 </text>
//                 <text
//                   dx="10%"
//                   x="50%"
//                   y="66%"
//                   fill="#000"
//                   className="text is-right font-rubik"
//                 >
//                   True Purity
//                 </text>
//               </svg>
//             </div>
//             <div className="posabs">
//               <svg
//                 viewBox="0 0 1600 700"
//                 preserveAspectRatio="xMidYMin meet"
//                 className="svga"
//               >
//                 <image
//                   xlinkHref="//cdn.shopify.com/s/files/1/0028/7254/1229/files/main_1e0d7e35-77ff-4490-8a6f-c87a85802933_1600x.jpg?v=1561968642"
//                   // href="hero1.jpg"
//                   style={{
//                     maxWidth: "100%",
//                     // height: "100%",
//                     width: "100%",
//                     clipPath: "url('#shapeVelyVely')",
//                   }}
//                 ></image>
//                 <text
//                   dx="-40%"
//                   x="50%"
//                   y="50%"
//                   fill="#fff"
//                   className="text is-left font-rubik"
//                   style={{ clipPath: "url('#shapeVelyVely')" }}
//                 >
//                   Experience
//                 </text>
//                 <text
//                   dx="10%"
//                   x="50%"
//                   y="66%"
//                   fill="#fff"
//                   className="text is-right font-rubik"
//                   style={{ clipPath: "url('#shapeVelyVely')" }}
//                 >
//                   True Purity
//                 </text>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";

// export default function HeroSection() {
//   return (
//     <div className="relative h-screen w-full" name="hero">
//       {/* Desktop Version (md and above) */}
//       <div className="hidden md:block h-full w-full">
//         <svg className="svg-defs" aria-hidden="true">
//           <defs>
//             <clipPath id="shapeVelyVely" clipPathUnits="userSpaceOnUse">
//               <path d="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z">
//                 <animate
//                   repeatCount="indefinite"
//                   attributeName="d"
//                   dur="5s"
//                   values="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;M452,360s31.156-141.666,162-214C733.647,79.855,810.23,42.3,872,38c137.68-9.583,190.04,91.324,252,220,0,0,74.98,148.733-17,274,0,0-66.6,95.241-196,130,0,0-94.546,15.779-250-60C504.522,540.92,426.292,455.009,452,360Z;M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;"
//                 />
//               </path>
//             </clipPath>
//           </defs>
//         </svg>

//         <div className="relative h-full w-full">
//           <div className="absolute inset-0">
//             <svg viewBox="0 0 1600 700" className="h-full w-full">
//               <image
//                 xlinkHref="//cdn.shopify.com/s/files/1/0028/7254/1229/files/main_1e0d7e35-77ff-4490-8a6f-c87a85802933_1600x.jpg"
//                 className="h-full w-full object-cover"
//                 style={{ clipPath: "url('#shapeVelyVely')" }}
//               />
//               <text
//                 x="50%"
//                 y="50%"
//                 className="text-6xl fill-white font-bold font-rubik translate-x-[-40%]"
//               >
//                 Experience
//               </text>
//               <text
//                 x="50%"
//                 y="66%"
//                 className="text-6xl fill-white font-bold font-rubik translate-x-[10%]"
//               >
//                 True Purity
//               </text>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Version (md below) */}
//       <div className="md:hidden h-full w-full relative">
//         <img
//           src="//cdn.shopify.com/s/files/1/0028/7254/1229/files/main_1e0d7e35-77ff-4490-8a6f-c87a85802933_1600x.jpg"
//           alt="Hero"
//           className="h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/30">
//           <h1 className="text-4xl font-bold text-white font-rubik mb-4">
//             Experience
//           </h1>
//           <h1 className="text-4xl font-bold text-white font-rubik">
//             True Purity
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function HeroSection() {
  return (
    <div className="h-screen w-full" name="hero">
      {/* Desktop Version */}
      <div className="hidden md:block h-full w-full">
        <svg className="svg-defs" aria-hidden="true">
          <defs>
            <clipPath id="shapeVelyVely" clipPathUnits="userSpaceOnUse">
              <path d="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z">
                <animate
                  repeatCount="indefinite"
                  attributeName="d"
                  dur="5s"
                  values="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;M452,360s31.156-141.666,162-214C733.647,79.855,810.23,42.3,872,38c137.68-9.583,190.04,91.324,252,220,0,0,74.98,148.733-17,274,0,0-66.6,95.241-196,130,0,0-94.546,15.779-250-60C504.522,540.92,426.292,455.009,452,360Z;M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;"
                />
              </path>
            </clipPath>
          </defs>
        </svg>

        <div className="pos-relative h-full">
          <div className="pos-absolute">
            <svg viewBox="0 0 1600 700" className="svga">
              <text
                dx="-40%"
                x="50%"
                y="50%"
                className="text is-left font-rubik"
                fill="#000"
              >
                Experience
              </text>
              <text
                dx="10%"
                x="50%"
                y="66%"
                className="text is-right font-rubik"
                fill="#000"
              >
                True Purity
              </text>
            </svg>
          </div>
          <div className="posabs">
            <svg viewBox="0 0 1600 700" className="svga">
              <image
                xlinkHref="//cdn.shopify.com/s/files/1/0028/7254/1229/files/main_1e0d7e35-77ff-4490-8a6f-c87a85802933_1600x.jpg"
                style={{ clipPath: "url('#shapeVelyVely')" }}
              />
              <text
                dx="-40%"
                x="50%"
                y="50%"
                className="text is-left font-rubik"
                fill="#fff"
                style={{ clipPath: "url('#shapeVelyVely')" }}
              >
                Experience
              </text>
              <text
                dx="10%"
                x="50%"
                y="66%"
                className="text is-right font-rubik"
                fill="#fff"
                style={{ clipPath: "url('#shapeVelyVely')" }}
              >
                True Purity
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden h-screen w-full relative">
        <img
          src="//cdn.shopify.com/s/files/1/0028/7254/1229/files/main_1e0d7e35-77ff-4490-8a6f-c87a85802933_1600x.jpg"
          alt="Vilvam Herbs"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30">
          <h1 className="text-[40px] md:text-[120px] text-white font-rubik text-center leading-tight">
            Experience
            <br />
            True Purity
          </h1>
        </div>
      </div>
    </div>
  );
}
