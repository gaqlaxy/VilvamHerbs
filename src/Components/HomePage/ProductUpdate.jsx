
// import React from "react";

// export default function ProductUpdate() {
//   return (
//     <div className="flex flex-col justify-center items-center gap-12 mt-12 mb-12 h-full">
//       <h1 className="text-3xl font-semibold text-center">
//       Heat is often used in the manufacturing process of <br /> conventional
//            skincare products. However this can <br />
//            dimmish the ingredient's powerful results. We have <br /> developed an
//            innovative cold stirng method.
//       </h1>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="781"
//         height="394"
//         fill="none"
//         viewBox="0 0 781 394"
//       >
//         <defs>
//           <clipPath id="videoClip">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M46 20C46 8.954 54.954 0 66 0h637c11.046 0 20 8.954 20 20v8c0 11.046 8.954 20 20 20h18c11.046 0 20 8.954 20 20v128c0 11.046-8.954 20-20 20h-18c-11.046 0-20 8.954-20 20v138c0 11.046-8.954 20-20 20H66c-11.046 0-20-8.954-20-20 0-7.18-5.82-13-13-13H20c-11.046 0-20-8.954-20-20V213c0-11.046 8.954-20 20-20h6c11.046 0 20-8.954 20-20V20Z"
//             />
//           </clipPath>
//         </defs>
//         <foreignObject 
//           x="0" 
//           y="0" 
//           width="781" 
//           height="394" 
//           clipPath="url(#videoClip)"
//         >
//           <video
//             src="medicine.mp4"  // update with your actual video path
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           />
//         </foreignObject>
//       </svg>
//     </div>
//   );
// }


{/* <svg xmlns="http://www.w3.org/2000/svg" width="576" height="483" fill="none" viewBox="0 0 576 483">
  <path fill="#D9D9D9" fill-rule="evenodd" d="M33.926 20c0-11.046 8.954-20 20-20h459.298c11.046 0 20 8.954 20 20v18.843c0 11.045 8.954 20 20 20H556c11.046 0 20 8.954 20 20v165.949c0 11.045-8.954 20-20 20h-2.776c-11.046 0-20 8.954-20 20V463c0 11.046-8.954 20-20 20H53.926c-11.046 0-20-8.954-20-20v-3.491c0-9.369-7.595-16.963-16.963-16.963C7.595 442.546 0 434.951 0 425.583V253.559c0-9.368 7.595-16.963 16.963-16.963 9.368 0 16.963-7.594 16.963-16.962V20Z" clip-rule="evenodd"/>
</svg> */}


// import React from "react";

// export default function ProductUpdate() {
//   return (
//     <div className="flex flex-col justify-center items-center gap-12 mt-12 mb-12 w-full">
//       <h1 className="text-xl md:text-3xl font-semibold text-center px-4">
//         Heat is often used in the manufacturing process of <br /> conventional
//         skincare products. However, this can <br />
//         diminish the ingredient's powerful results. We have <br /> developed an
//         innovative cold stirring method.
//       </h1>

//       <div className="w-full max-w-[781px] px-4">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 781 394"
//           className="w-full h-auto"
//         >
//           <defs>
//             <clipPath id="videoClip">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M46 20C46 8.954 54.954 0 66 0h637c11.046 0 20 8.954 20 20v8c0 11.046 8.954 20 20 20h18c11.046 0 20 8.954 20 20v128c0 11.046-8.954 20-20 20h-18c-11.046 0-20 8.954-20 20v138c0 11.046-8.954 20-20 20H66c-11.046 0-20-8.954-20-20 0-7.18-5.82-13-13-13H20c-11.046 0-20-8.954-20-20V213c0-11.046 8.954-20 20-20h6c11.046 0 20-8.954 20-20V20Z"
//               />
//             </clipPath>
//           </defs>
//           <foreignObject x="0" y="0" width="100%" height="100%" clipPath="url(#videoClip)">
//             <video
//               src="medicine.mp4" // Update with your actual video path
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           </foreignObject>
//         </svg>
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function ProductUpdate() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 mt-12 mb-12 w-full">
      <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center leading-relaxed max-w-4xl px-4">
        Heat is often used in the manufacturing process of conventional skincare products. 
        However, this can diminish the ingredient's powerful results. 
        We have developed an innovative cold stirring method.
      </h1>

      <div className="w-full max-w-[781px] px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 781 394"
          className="w-full h-auto"
        >
          <defs>
            <clipPath id="videoClip">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46 20C46 8.954 54.954 0 66 0h637c11.046 0 20 8.954 20 20v8c0 11.046 8.954 20 20 20h18c11.046 0 20 8.954 20 20v128c0 11.046-8.954 20-20 20h-18c-11.046 0-20 8.954-20 20v138c0 11.046-8.954 20-20 20H66c-11.046 0-20-8.954-20-20 0-7.18-5.82-13-13-13H20c-11.046 0-20-8.954-20-20V213c0-11.046 8.954-20 20-20h6c11.046 0 20-8.954 20-20V20Z"
              />
            </clipPath>
          </defs>
          <foreignObject x="0" y="0" width="100%" height="100%" clipPath="url(#videoClip)">
            <video
              src="medicine.mp4" // Update with your actual video path
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}
