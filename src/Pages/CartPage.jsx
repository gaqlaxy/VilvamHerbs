import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-green-600">${item.price} x {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}