import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md px-12 py-6 flex items-center justify-between text-gray-800">
      <div className="flex items-center gap-8">
        <div className="flex items-center text-xl tracking-wide">
          <span className="font-['Poppins',serif] mr-1">THE FIKA</span>
          <span className="font-['Caveat',cursive]">CAFE</span>
        </div>

        <ul className="flex gap-6">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/shop">Shop</Link>
          </li>

          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/subscription">Subscriptions</Link>
          </li>

          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/faq">FAQ</Link>
            </li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <span className="cursor-pointer">🛒 0</span>
        <span className="cursor-pointer flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-300"></span>
          Log In
        </span>
      </div>
    </nav>
  );
}
