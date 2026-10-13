import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />

      <h2>{product.title}</h2>
      <p className="price">${product.price}</p>

      <button className="btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default React.memo(ProductCard);