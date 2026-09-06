import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="200"
      />

      <h2>{product.title}</h2>
      <p>{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default React.memo(ProductCard);