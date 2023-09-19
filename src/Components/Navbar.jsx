import React, { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Helpers/Contex";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const Navigate = useNavigate();
  const {cartItems}=useCart()
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white text-2xl cursor-pointer font-bold"
              onClick={() => {
                Navigate("/");
              }}
            >Intertoons</div>
            <div className="hidden md:flex space-x-4">
              <a
                className="text-white cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Home
              </a>
              <a
                className="text-white cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Shop
              </a>
              <a
                className="text-white cursor-pointer "
                onClick={() => {
                  Navigate("/");
                }}
              >
                About
              </a>
              <a
                className="text-white cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Contact
              </a>
              <a
                className="text-white cursor-pointer"
                onClick={() => {
                  Navigate("/cart");
                }}
              >
                <ShoppingCart size={32} />
                {cartItemCount > 0 && (
              <span className="bg-red-500 text-white rounded-full absolute -top-0 -right-0 px-2">
                {cartItemCount}
              </span>
            )}
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            Home
          </a>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            Shop
          </a>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            About
          </a>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            Contact
          </a>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/cart");
            }}
          >
            Cart
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
