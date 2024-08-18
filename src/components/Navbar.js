import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import ShopContext from "../context/shop-context"; // Make sure the context path is correct
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate total number of items in the cart
  const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        {/* <Link to="/contact"> Contact </Link> */}
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

