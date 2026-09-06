import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../contexts/CardContext'

function Navbar() {

  const { state } = useContext(CardContext)

  const cartCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="checkout">
        <button>Checkout</button>
      </Link>

      <Link to="product">
        <button>ProductsDetails</button>
      </Link>

      <Link to="cart">
        <button>Cart 🛒 ({cartCount})</button>
      </Link>
    </nav>
  )
}

export default Navbar