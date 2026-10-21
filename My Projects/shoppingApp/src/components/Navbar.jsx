import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"


function Navbar() {

  const { cartItemCount } = useCart()

  return (

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          ShopZone
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >

          <span className="navbar-toggler-icon"></span>

        </button>


        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">

              <Link className="nav-link" to="/">
                Home
              </Link>

            </li>


            <li className="nav-item">

              <Link className="nav-link" to="/products">
                Products
              </Link>

            </li>


            <li className="nav-item">

              <Link className="nav-link" to="/cart">

                Cart ({cartItemCount})
                
              </Link>

            </li>


            <li className="nav-item">

              <Link className="nav-link" to="/checkout">
                Checkout
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  )

}


export default Navbar