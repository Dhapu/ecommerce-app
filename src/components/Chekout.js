import React from "react";
import { useLocation } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const location = useLocation();
  const orderSuccess = location.state?.orderSuccess;

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {orderSuccess && (
        <div className="orderSuccessMessage">
          Your order has been placed successfully!
        </div>
      )}
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default Checkout;
