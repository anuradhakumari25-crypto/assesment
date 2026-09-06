import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CardContext } from "../contexts/CardContext";

function ProductDetails() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const { state, dispatch } = useContext(CardContext);

  if (loading) {
    return <h2>Loading.........</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!data) {
    return <h2>Product not found</h2>;
  }

  const isInCart = state.cart.some(
    (item) => item.id === data.id
  );

  return (
    <div>
      <h1>{data.title}</h1>

      <img
        src={data.image}
        alt={data.title}
        width="200"
      />

      <p>{data.description}</p>

      <h2>${data.price}</h2>

      {!isInCart ? (
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: data,
            })
          }
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: data.id,
            })
          }
        >
          Remove
        </button>
      )}
    </div>
  );
}

export default ProductDetails;