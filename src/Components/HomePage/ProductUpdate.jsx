// import React from "react";

// export default function ProductUpdate() {
//   return (
//     <>
//       <div className="flex flex-col justify-center items-center gap-12 mt-12 mb-12 h-full">
//         <h1 className="text-3xl font-semibold text-center">
//           Heat is often used in the manufacturing process of <br /> conventional
//           skincare products. However this can <br />
//           dimmish the ingredient's powerful results. We have <br /> developed an
//           innovative cold stirng method.
//         </h1>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="781"
//           height="394"
//           fill="none"
//           viewBox="0 0 781 394"
//         >
//           <path
//             fill="#D9D9D9"
//             fill-rule="evenodd"
//             d="M46 20C46 8.954 54.954 0 66 0h637c11.046 0 20 8.954 20 20v8c0 11.046 8.954 20 20 20h18c11.046 0 20 8.954 20 20v128c0 11.046-8.954 20-20 20h-18c-11.046 0-20 8.954-20 20v138c0 11.046-8.954 20-20 20H66c-11.046 0-20-8.954-20-20 0-7.18-5.82-13-13-13H20c-11.046 0-20-8.954-20-20V213c0-11.046 8.954-20 20-20h6c11.046 0 20-8.954 20-20V20Z"
//             clip-rule="evenodd"
//           />
//         </svg>
//       </div>
//     </>
//   );
// }


import React from "react";

export default function ProductUpdate() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 mt-12 mb-12 h-full">
      <h1 className="text-3xl font-semibold text-center">
      Heat is often used in the manufacturing process of <br /> conventional
           skincare products. However this can <br />
           dimmish the ingredient's powerful results. We have <br /> developed an
           innovative cold stirng method.
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="781"
        height="394"
        fill="none"
        viewBox="0 0 781 394"
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
        <foreignObject 
          x="0" 
          y="0" 
          width="781" 
          height="394" 
          clipPath="url(#videoClip)"
        >
          <video
            src="medicine.mp4"  // update with your actual video path
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
    </div>
  );
}
