import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCards";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const token = import.meta.env.VITE_KEY_TOKEN;
    const fetchData = async () => {
      try {
        const apiUrl = "https://caffa.smsoman.com/api/V1/products";
        const headers = {
          Authorization: token,
        };
        const requestData = {
          currentpage: 1,
          pagesize: 100,
          sortorder: {
            field: "menu_name",
            direction: "desc",
          },
          searchstring: searchItem,
          filter: {
            category: "",
          },
        };
        const response = await axios.post(apiUrl, requestData, { headers });
        const productData = response.data.data.products;
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [searchItem]);

  const handleSearchInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl flex justify-center mt-14 font-semibold mb-4">
          Products
        </h2>
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search by product name"
            className="px-4 py-2 border rounded-lg"
            value={searchItem}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
