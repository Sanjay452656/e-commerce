import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, ShoppingCart } from "lucide-react";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector(state => state.cart.items);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const cartCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          ShopEase
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="
    absolute -top-2 -right-2
    bg-black text-white text-xs
    rounded-full h-5 w-5
    flex items-center justify-center
    animate-bounce
  ">
                {cartCount}
              </span>
            )}
          </Link>
           {isAuth ? (
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn-primary">
            Login
          </Link>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
