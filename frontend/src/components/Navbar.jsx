import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, ShoppingCart, Store } from "lucide-react";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector(state => state.cart.items);
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const cartCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-black transition"
        >
          <Store size={22} />
          ShopEase
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Home */}
          <Link 
            to="/" 
            className="text-gray-700 hover:text-black font-medium transition"
          >
            Home
          </Link>

          {/* Cart */}
          <Link 
            to="/cart" 
            className="relative p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <ShoppingCart size={22} className="text-gray-800" />

            {cartCount > 0 && (
              <span className="
                absolute -top-1 -right-1
                bg-black text-white text-xs
                rounded-full h-5 w-5
                flex items-center justify-center
                font-medium
              ">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth Button */}
          {isAuth ? (
            <button
              onClick={handleLogout}
              className="
                flex items-center gap-2
                bg-black text-white
                px-4 py-2 rounded-lg
                hover:bg-gray-800
                transition
                text-sm font-medium
              "
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="
                bg-black text-white
                px-4 py-2 rounded-lg
                hover:bg-gray-800
                transition
                text-sm font-medium
              "
            >
              Login
            </Link>
          )}

        </div>
      </div>

    </nav>
  );
};

export default Navbar;