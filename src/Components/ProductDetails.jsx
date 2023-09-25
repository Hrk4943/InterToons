import React, { useEffect, useState } from "react";
import { useCart } from "../Helpers/Contex";
import { useParams } from "react-router-dom"; 
import axios from "axios";

function ProductDetails() {
  const [products, setProducts] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();
  useEffect(() => {
    const token = import.meta.env.VITE_KEY_TOKEN
    const apiUrl = `http://caffa.smsoman.com/api/V1/product/${id}`;
    const headers = {
      Authorization: token,
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, { headers });
        const productData=response.data.data.product
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    showAlert();
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 py-24">
        <div className="mb-10 md:mb-0 flex justify-center">
          <img
            src={products.image}
            alt={products.name}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-3xl flex justify-center items-center sm:text-4xl font-medium text-gray-900 mb-4">
            <span className="font-bold">{products.name}</span>
          </h1>
          <span className="flex justify-center items-center text-gray-600 p-1">
            {products.description}
          </span>
          <h3 className="text-2xl font-semibold flex justify-center items-center p-2">
            $ {products.price}
          </h3>
          <div className="flex justify-center items-center mb-4">
            <button
              className="px-6 py-2 text-lg font-bold border-2 rounded-md text-black bg-white hover:text-white hover:bg-black border-none focus:outline-none"
              onClick={() => handleAddToCart(products)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
