
import React from "react";
//import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./Home.css";
import { useState, useEffect } from "react";
 const Home = () => {
      const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //console.log(products);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-Commerce Shop</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
