import { Link } from "react-router-dom";
import { useState } from "react";
import Image from "../../assets/image/favicon.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md px-6 md:px-12 py-4">
      <div className="flex items-center justify-between w-full">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl tracking-wide">
          <span className="font-['Poppins',serif] mr-1">THE FIKA</span>
          <span className="font-['Caveat',cursive]">CAFE</span>
        </Link>

        {/* Hamburger (Mobile Only) */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-6">

          <ul className="flex items-center gap-6">
            <li className="hover:text-gray-500">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="/subscription">Subscriptions</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>

          {/* Cart - Only Desktop */}
          <span className="cursor-pointer">🛒 0</span>

          {/* Profile */}
          <span className="cursor-pointer flex items-center gap-2">
            <span className="w-8 h-8 rounded-full overflow-hidden">
              <img src={Image} className="w-full h-full object-cover" />
            </span>
            Log In
          </span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${open ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="flex flex-col gap-4 text-lg">
          <li className="hover:text-gray-500">
            <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/subscription" onClick={() => setOpen(false)}>Subscriptions</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          </li>
        </ul>

        {/* Cart + Profile (Mobile Only) */}
        <div className="flex items-center justify-between mt-4">
          <span className="cursor-pointer text-lg">🛒 0</span>

          <span className="cursor-pointer flex items-center gap-2">
            <span className="w-8 h-8 rounded-full overflow-hidden">
              <img src={Image} className="w-full h-full object-cover" />
            </span>
            Log In
          </span>
        </div>
      </div>
    </nav>
  );
}
