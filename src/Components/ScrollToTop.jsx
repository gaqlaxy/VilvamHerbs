// // components/ScrollToTop.jsx
// import { useState, useEffect } from 'react';
// import { Link as ScrollLink } from 'react-scroll';

// export default function ScrollToTop() {
//   const [visible, setVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   return (
//     <div className={`fixed bottom-8 right-8 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
//       <ScrollLink
//         to="hero" // Should match your top section's name
//         smooth={true}
//         duration={500}
//         className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 cursor-pointer block"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M5 10l7-7m0 0l7 7m-7-7v18"
//           />
//         </svg>
//       </ScrollLink>
//     </div>
//   );
// }

// components/ScrollToTop.jsx
import { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 300);
  };

  const handleScrollToTop = () => {
    
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={handleScrollToTop}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 cursor-pointer block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}