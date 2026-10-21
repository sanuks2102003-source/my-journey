import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

function Cart() {

  const {

    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal

  } = useCart()


  if (cart.length === 0 ) {

    return(
      <div className="container py-5 text-center">

        <h1>
          Your Cart is Empty
        </h1>

        <p className="text-muted">
           Add Some Product to your Cart.
        </p>

        <Link
            to="/products"
            className="btn btn-dark"
            >
              Continue Shopping
        
        </Link>

      </div>
    )
  }

  return(

    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h1>
          Shopping Cart
        </h1>

        <button
              className="btn btn-outline-danger"
              onClick={clearCart}
              >
                Clear Cart

        </button>

      </div>

      <div className="row">

        <div className="col-lg-8">

          {cart.map((item) => (

            <div 
                className="card mb-3"
                key={item.id}
                >

                  <div className="card-body">

                    <div className="row align-items-center">

                      <div className="col-md-3">

                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="img-fluid rounded"
                        />

                      </div>

                      <div className="col-md-3">

                        <h5>
                          {item.name}
                        </h5>

                        <p className="text-muted">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>

                      </div>

                      <div className="col-md-3">

                        <div className="d-flex align-items-center">

                          <button 
                                className="btn btn-outline-secondary"
                                onClick={() => 
                                  decreaseQuantity(item.id)
                                }
                              > - 

                          </button>

                          <span className="mx-3">
                            {item.quantity}
                          </span>

                          <button
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                  increaseQuantity(item.id)
                                }
                              > + 

                          </button>

                        </div>

                      </div>

                      <div className="col-md-2">

                        <strong>
                          ₹{(
                            item.price * item.quantity
                          ).toLocaleString("en-IN")}
                        </strong>

                      </div>

                      <div className="col-md-1">

                        <button
                              className="btn btn-sm btn-danger"
                              onClick={() =>
                                removeFromCart(item.id)
                              }
                            > x

                        </button>
                         
                      </div>

                    </div>

                  </div>

            </div>

          ))}

        </div>

        <div className="col-lg-4">

          <div className="card">

            <div className="card-body">

              <h4>
                Order Summary
              </h4>

              <hr />

              <div className="d-flex justify-content-between">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </strong>

              </div>

              <div className="d-flex justify-content-between mt-2">

                <span>
                  Delivery
                </span>

                <span>
                  Free
                </span>

              </div>

              <hr />


              <div d-flex justify-content-between>

                <strong>
                  Total : 
                </strong>

                <strong>
                    ₹{cartTotal.toLocaleString("en-IN")}
                </strong>

              </div>

              <Link to="/checkout"
                    className="btn btn-dark w-100 mt-4"
                  >
                    Proceed to Checkout

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
  
}

export default Cart