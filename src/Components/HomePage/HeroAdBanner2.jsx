

// import React from 'react';

// export default function HeroAdBanner2() {
//   return (
//     <div className='grid place-content-center'>
//       <svg xmlns="http://www.w3.org/2000/svg" width="1036" height="640" fill="none" viewBox="0 0 1361 640">
//         <defs>
//           <clipPath id="heroVideoClip">
//             <path fill-rule="evenodd" clip-rule="evenodd" 
//               d="M98.058 20c0-11.046 8.954-20 20-20h584.973c11.046 0 20 8.954 20 20v50c0 11.046 8.955 20 20 20H1341c11.05 0 20 8.954 20 20v425c0 11.046-8.95 20-20 20h-72.24c-11.04 0-20 8.954-20 20v45c0 11.046-8.95 20-20 20H743.031c-11.045 0-20-8.954-20-20v-45c0-11.046-8.954-20-20-20H20c-11.046 0-20-8.954-20-20V110c0-11.046 8.954-20 20-20h58.058c11.046 0 20-8.954 20-20V20Z"
//             />
//           </clipPath>
//         </defs>
//         <foreignObject 
//           x="0" 
//           y="0" 
//           width="1361" 
//           height="640" 
//           clipPath="url(#heroVideoClip)"
//         >
//           <video 
//             src="medicine.mp4"  
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
import React from 'react';

export default function HeroAdBanner2() {
  return (
    <div className="w-full px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-xl">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1361 640"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="heroVideoClip" transform="translate(0 0) scale(0.95 0.95)">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd"
                  d="M148.058 20c0-11.046 8.954-20 20-20h584.973c11.046 0 20 8.954 20 20v50c0 11.046 8.955 20 20 20H1193c11.05 0 20 8.954 20 20v425c0 11.046-8.95 20-20 20h-72.24c-11.04 0-20 8.954-20 20v45c0 11.046-8.95 20-20 20H743.031c-11.045 0-20-8.954-20-20v-45c0-11.046-8.954-20-20-20H20c-11.046 0-20-8.954-20-20V110c0-11.046 8.954-20 20-20h58.058c11.046 0 20-8.954 20-20V20Z"
                />
              </clipPath>
            </defs>
            
            <foreignObject 
              x="0" 
              y="0" 
              width="100%" 
              height="100%" 
              clipPath="url(#heroVideoClip)"
            >
              <video 
                src="medicine.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}