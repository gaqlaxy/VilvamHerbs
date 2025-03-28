// import { useCart } from "../context/CartContext";

// export default function CartPage() {
//   const { cart } = useCart();

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-600">Your cart is empty</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.map(item => (
//             <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{item.name}</h3>
//                   <p className="text-green-600">${item.price} x {item.quantity}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// src/pages/CartPage.jsx
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import emailjs from "@emailjs/browser";

// import { motion } from "framer-motion";

// export default function CartPage() {
//   const { cart, updateQuantity, removeItem, clearCart, totalAmount } =
//     useCart();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Format cart details for email
//     const cartDetails = cart
//       .map(
//         (item) => `
//       • ${item.name}
//       Quantity: ${item.quantity}
//       Price: $${item.price.toFixed(2)}
//       Subtotal: $${(item.price * item.quantity).toFixed(2)}
//     `
//       )
//       .join("\n");

//     try {
//       // Send email via EmailJS
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,

//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           order: `Order Inquiry:\n${cartDetails}\nTotal Amount: $${totalAmount.toFixed(
//             2
//           )}`,
//           phone: formData.phone,
//         },
//         import.meta.env.VITE_EMAILJS_USER_ID
//       );

//       // Open WhatsApp
//       const whatsappMessage = `Hello Vilvam Herbs,\nI would like to inquire about these products:\n${cartDetails}\nTotal: $${totalAmount.toFixed(
//         2
//       )}`;
//       window.open(
//         `https://wa.me/91YOUR_PHONE_NUMBER?text=${encodeURIComponent(
//           whatsappMessage
//         )}`,
//         "_blank"
//       );

//       // Clear cart after submission
//       clearCart();
//       alert("Inquiry sent successfully!");
//     } catch (error) {
//       console.error("Inquiry failed:", error);
//       alert("Failed to send inquiry. Please try again.");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
//     >
//       <h1 className="text-3xl font-bold text-[#0e402d] mb-8">Your Order</h1>

//       {cart.length === 0 ? (
//         <div className="text-center">
//           <p className="text-gray-600 mb-4">Your cart is empty</p>
//           <a
//             href="/"
//             className="bg-[#0e402d] text-white px-6 py-3 rounded-lg hover:bg-[#1a5d3e]"
//           >
//             Continue Shopping
//           </a>
//         </div>
//       ) : (
//         <div className="space-y-8">
//           <div className="space-y-6">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-32 h-32 object-cover rounded-lg"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {item.name}
//                   </h3>
//                   <div className="mt-2 flex items-center gap-4">
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         updateQuantity(item.id, parseInt(e.target.value))
//                       }
//                       className="w-20 px-3 py-2 border rounded"
//                     />
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-red-600 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                   <p className="mt-2 text-green-700 font-semibold">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-6 rounded-lg shadow-md space-y-6"
//           >
//             <h2 className="text-2xl font-semibold text-[#0e402d]">
//               Contact Details
//             </h2>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0e402d]"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   required
//                   className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0e402d]"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2">
//                   WhatsApp Number
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0e402d]"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             <div className="border-t pt-6">
//               <div className="flex justify-between items-center mb-6">
//                 <span className="text-xl font-semibold">Total Amount:</span>
//                 <span className="text-2xl font-bold text-[#0e402d]">
//                   ${totalAmount.toFixed(2)}
//                 </span>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="w-full bg-[#0e402d] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#1a5d3e]"
//               >
//                 Send Inquiry via Email & WhatsApp
//               </motion.button>
//             </div>
//           </form>
//         </div>
//       )}
//     </motion.div>
//   );
// }

import { useState } from "react";
import { useCart } from "../context/CartContext";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalAmount,
  } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Format cart details for email
      const cartDetails = cart
        .map(
          (item) => `
        • ${item.name}
        Quantity: ${item.quantity}
        Price: $${item.price.toFixed(2)}
        Subtotal: $${(item.price * item.quantity).toFixed(2)}
      `
        )
        .join("\n");

      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: `Order Inquiry:\n${cartDetails}\nTotal Amount: $${totalAmount.toFixed(
            2
          )}`,
          phone: formData.phone,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Open WhatsApp
      const whatsappMessage = `Hello Vilvam Herbs,\nI want to purchase these products:\n${cartDetails}\nTotal: $${totalAmount.toFixed(
        2
      )}`;
      window.open(
        `https://wa.me/${
          import.meta.env.VITE_WHATSAPP_NUMBER
        }?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );

      // Clear cart after successful submission
      clearCart();
      alert("Inquiry sent successfully! We'll contact you shortly.");
    } catch (error) {
      console.error("Inquiry submission failed:", error);
      alert("Failed to send inquiry. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold text-[#0e402d] mb-8">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="bg-[#0e402d] text-white px-6 py-3 rounded-lg hover:bg-[#1a5d3e] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-20 px-3 py-2 border rounded"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-green-700 font-semibold">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md space-y-6"
          >
            <h2 className="text-2xl font-semibold text-[#0e402d]">
              Contact Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0e402d]"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0e402d]"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0e402d]"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">
                  Total ({totalItems} items):
                </span>
                <span className="text-2xl font-bold text-[#0e402d]">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#0e402d] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#1a5d3e] transition-colors"
              >
                Send Inquiry via Email & WhatsApp
              </motion.button>
            </div>
          </form>
        </div>
      )}
    </motion.div>
  );
}
