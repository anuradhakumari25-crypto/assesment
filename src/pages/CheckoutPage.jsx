import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../contexts/CardContext";

function CheckoutPage() {
  const { state, dispatch } = useContext(CardContext);

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  if (state.cart.length === 0) {
    return (
      <div className="page cart-page">
        <h1 className="page-title">Your Cart</h1>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn">Continue shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <h1 className="page-title">Your Cart</h1>

      <div className="cart-list">
        {state.cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p className="cart-meta">
                ${item.price} &times; {item.quantity || 1}
              </p>
            </div>

            <div className="cart-side">
              <strong className="cart-line-total">
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </strong>
              <button
                className="btn danger small"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default CheckoutPage;