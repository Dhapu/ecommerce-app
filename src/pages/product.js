import React, { useContext } from "react";
import ShopContext from "../context/shop-context";

export const Product = (props) => {
  const { id, productName, productPrice, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${productPrice}</p>
      </div>
      {/* <button className="addToCartBttn">Add To Cart</button> */}
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};