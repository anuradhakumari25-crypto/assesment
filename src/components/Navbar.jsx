import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CardContext } from "../contexts/CardContext";

function Navbar() {
  const { state } = useContext(CardContext);

  const cartCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav>
      <NavLink to="/" className="brand">Tech Store</NavLink>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/checkout">
          Cart 🛒 <span className="badge">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;