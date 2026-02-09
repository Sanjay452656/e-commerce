import { useDispatch } from "react-redux";
import {addToCart} from '../features/cartSlice'
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-52 bg-gray-50 flex items-center justify-center">
        <Link to={`/product/${product.id}`} >
          <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain group-hover:scale-105 transition-transform"
        />
        </Link>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-semibold text-gray-900">
            ₹{product.price}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
