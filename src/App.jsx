import PrincipalPage from './pages/PrincipalPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import FormPage from './pages/FormPage'
import LoginPage from './pages/LoginPage'
import CheckoutPage from './pages/CheckoutPage'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/producto/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path='/form' element={<FormPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/checkout' element={<CheckoutPage />}/>
    </Routes>
  )
}

export default App
