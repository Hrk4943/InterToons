import React,{useState} from "react";
import {useCart} from "../Helpers/Contex"

function CartComponent() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredCartItems = cartItems.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <>
      <div className="container mx-auto mt-10 mb-10 sm:mb-36 rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Shopping Cart
        </h2>
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search items in cart"
            className="px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
        {filteredCartItems.length === 0 ? (
          <p className="mt-10 mb-10 text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {filteredCartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between border-4 items-center sm:mx-60 px-2 sm:px-10 py-2 sm:py-10 mb-5"
              >
                <div className="flex items-center mb-2 sm:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-2 sm:mr-4"
                  />
                  <div>
                    <span className="text-lg">{item.name}</span>
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="text-gray-500 hover:text-gray-700 text-lg mr-2"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="text-gray-500 hover:text-gray-700 text-lg ml-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <span className="text-lg">
                  Price: $ {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 text-lg mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <p className="text-lg font-semibold text-center">
            Total Price: $ {totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center">
          {cartItems.length !== 0 ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 "
            >
              Make Payment
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CartComponent;
