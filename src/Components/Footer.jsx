import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// components/Footer.jsx
export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setError(null);
    setIsSuccess(false);

    // Simple validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your template ID
        { email }, // Template parameters
        import.meta.env.VITE_EMAILJS_USER_ID // Your user ID
      );

      // Success handling
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000); // Hide message after 5s
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Subscription failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logotrans.png" alt="Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold text-green-400">
                Vilvam Herbs
              </span>
            </div>
            <p className="text-sm">
              Crafting natural solutions for hair & skin care since 2020.
              Committed to 100% organic ingredients and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-green-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-green-400 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Nature Way</li>
              <li>Green City, GC 12345</li>
              <li>Email: contact@herbalhaven.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-green-400 font-semibold mb-4">Newsletter</h3>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                disabled={isSubmitting}
                required
              />

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </button>
            </form>

            {/* Status Messages */}
            {isSuccess && (
              <p className="text-green-400 text-sm mt-2">
                ✅ Success! Check your email for confirmation
              </p>
            )}
            {error && <p className="text-red-400 text-sm mt-2">❌ {error}</p>}
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Vilvam Herbs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
