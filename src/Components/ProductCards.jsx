import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Helpers/Contex";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const Navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <>
      <div className="p-4 flex justify-center">
        <div className="mb-7 rounded-lg cursor-pointer overflow-hidden">
          <img
            src={product.image}
            className="w-72 h-60 rounded-lg "
            alt={product.name}
            onClick={() => Navigate(`/productDetails/${product.id}`)}
          />
          <div className="p-4">
            <p className="text-lg flex justify-center font-semibold mb-2">
              {product.name}
            </p>
            <p className="text-xl flex justify-center font-semibold">
              $ {product.price}
            </p>
          </div>
          <div className="p-4 text-center">
            <button
              className=" text-black border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white"
              onClick={() =>  handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
