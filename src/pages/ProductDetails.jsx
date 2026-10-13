
import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CardContext } from "../contexts/CardContext";

function ProductDetails() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  const { state, dispatch } = useContext(CardContext);

  if (loading) {
    return <h2 className="page">Loading.........</h2>;
  }

  if (error) {
    return <h2 className="page">Error: {error}</h2>;
  }

  if (!data) {
    return <h2 className="page">Product not found</h2>;
  }

  const isInCart = state.cart.some((item) => item.id === data.id);

  return (
    <div className="page details">
      <img src={data.thumbnail} alt={data.title} />

      <div>
        <h1 className="page-title">{data.title}</h1>
        <p>{data.description}</p>
        <h2 className="price">${data.price}</h2>

        {!isInCart ? (
          <button
            className="btn"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: data })}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="btn danger"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: data.id })
            }
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;