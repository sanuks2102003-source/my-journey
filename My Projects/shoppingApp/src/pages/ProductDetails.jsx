import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

import { useCart } from "../context/CartContext"


function ProductDetails() {

  const { id } = useParams()

  const navigate = useNavigate()

  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")


  useEffect(() => {

    axios.get(`http://localhost:3000/products/${id}`)

      .then((response) => {

        setProduct(response.data)

      })

      .catch(() => {

        setError("Product not found")

      })

      .finally(() => {

        setLoading(false)

      })

  }, [id])


  if (loading) {

    return (

      <div className="container py-5 text-center">

        <h3>
          Loading product...
        </h3>

      </div>

    )

  }


  if (error) {

    return (

      <div className="container py-5 text-center">

        <h3 className="text-danger">
          {error}
        </h3>

        <button
          className="btn btn-dark mt-3"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>

      </div>

    )

  }


  return (

    <div className="container py-5">

      <div className="row">

        <div className="col-md-6">

          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />

        </div>


        <div className="col-md-6">

          <h1>
            {product.name}
          </h1>

          <p className="text-muted">
            {product.category}
          </p>

          <h3>
            ₹{product.price.toLocaleString("en-IN")}
          </h3>

          <p className="mt-3">
            {product.description}
          </p>

          <p>
            Rating: {product.rating}
          </p>

          <p>
            Stock: {product.stock}
          </p>


          <button 
              className="btn btn-dark me-2"
              onClick={() => addToCart(product)}>
            Add to Cart
          </button>


          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/products")}
          >
            Back
          </button>

        </div>

      </div>

    </div>

  )

}


export default ProductDetails