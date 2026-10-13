import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import { useState, useCallback, useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const { loading, error, data } = useFetch(
    "https://dummyjson.com/products?limit=30"
  );

  const [search, setSearch] = useState("");
  const { dispatch } = useContext(CardContext);

  const addToCart = useCallback((product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }, [dispatch]);

  const debouncedSearch = useDebounce(search, 500);

  const filteredProducts = (data?.products || []).filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  if (error) {
    return <h1 className="page">Error: {error}</h1>;
  }

  if (loading) {
    return <h1 className="page">Loading...</h1>;
  }

  return (
    <div className="page">
      <h1 className="page-title">Tech Store</h1>

      <input
        className="search"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="empty">No products found.</p>
      )}
    </div>
  );
}

export default Home;