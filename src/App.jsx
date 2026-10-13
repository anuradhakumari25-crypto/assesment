import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<h2 className="page">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <div className="page cart-empty">
                <h2>Page not found</h2>
                <Link to="/" className="btn">Back to home</Link>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;