import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../features/cartSlice";

const CartItem = ({ item }) => {
  
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 border p-4 rounded-lg">
      <img
        src={item.image}
        alt={item.title}
        className="h-20 w-20 object-contain"
      />

      <div className="flex-1">
        <h2 className="font-semibold">{item.title}</h2>
        <p>₹ {item.price}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            className="
    px-3 py-1 border rounded
    transition-all duration-150
    hover:bg-gray-100
    active:scale-90
  "
            onClick={() => dispatch(decreaseQty(item._id))}
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            className="
    px-3 py-1 border rounded
    transition-all duration-150
    hover:bg-gray-100
    active:scale-90
  "
            onClick={() => dispatch(increaseQty(item._id))}
          >
            +
          </button>
        </div>
      </div>

      <button
        className="
    px-3 py-1 border rounded
    transition-all duration-150
    hover:bg-gray-100
    active:scale-90
  "
        onClick={() => dispatch(removeFromCart(item._id))}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
