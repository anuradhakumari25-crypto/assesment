import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import { useState } from "react";
import { useCallback, useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const { loading, error, data } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const [search, setSearch] = useState("");

  const { dispatch } = useContext(CardContext);

const addToCart = useCallback((product) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
}, [dispatch]);


  const debouncedSearch = useDebounce(search, 500);

  const filteredProducts = (data || []).filter((product) =>
    product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Tech Store</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
    addToCart={addToCart}
  />
))}

      

      {filteredProducts.length === 0 && (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Home;