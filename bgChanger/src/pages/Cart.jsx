import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  console.log(items)
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-xl">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 flex justify-between text-xl font-semibold">
        <span>Total</span>
        <span>₹ {total.toFixed(2)}</span>
      </div>
    </div>
  );
}
