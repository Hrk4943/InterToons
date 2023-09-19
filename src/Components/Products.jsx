import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCards";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://fda.intertoons.com/api/V1/products";
        const headers = {
          Authorization: "Bearer akhil@intertoons.com",
        };
        const requestData = {
          currentpage: 1,
          pagesize: 100,
          sortorder: {
            field: "menu_name",
            direction: "desc",
          },
          searchstring: searchTerm,
          filter: {
            category: "",
          },
        };
        const response = await axios.post(apiUrl, requestData, { headers });
        console.log(response.data.data.products)
        setProducts(response.data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [searchTerm]); 

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
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
            value={searchTerm}
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
