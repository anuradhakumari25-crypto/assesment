import { BrowserRouter,Link,Routes,Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App(){
  return(
    <div>
<BrowserRouter>
<nav>
  <Link to="/">Home</Link>
  <Link to="/CheckoutPage">Checkout</Link>
  <Link to= "/ProductDetailsPage">Product</Link>
</nav>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/CheckoutPage" element={<CheckoutPage/>}/>
  <Route path="/ProductDetailsPage" element={<ProductDetailsPage/>}/>
  </Routes>
</BrowserRouter>
      </div>
  )
}

export default App;


