import { Routes, Route, Outlet} from "react-router-dom"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Payment from "./pages/Payment"
import OrderSuccess from "./pages/OrderSuccess"
import NotFound from "./pages/NotFound"
import ProductDetails from "./pages/ProductDetails"




function Layout() {



  return(
    <>
    <Navbar />

    <main>
      <Outlet />
    </main>

    <Footer />
    </>

  )
}

function App() {
  return(

    <Routes>

     <Route element={<Layout />}>

      <Route path="/" element={<Home />}/>

      <Route path="/products" element={<Products />}/>

      <Route path="/products/:id" element={<ProductDetails />}/>

      <Route path="/cart" element={<Cart />}/>

      <Route path="/checkout" element={<Checkout />}/>

      <Route path="/payment" element={<Payment />}/>

      <Route path="/order-success" element={<OrderSuccess />}/>

      <Route path="*" element={<NotFound />}/>

    </Route>

    </Routes>
  )
}
export default App