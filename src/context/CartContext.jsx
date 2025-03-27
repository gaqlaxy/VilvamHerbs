import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("vilvamCart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("vilvamCart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("vilvamCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const values = {
    cart,
    addToCart,
    // Add other functions later (remove, update quantity, etc)
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
