

import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return(

    <div className="col-md-4 mb-4">

      <div className="card h-100 shadow-sm">

        <img src={product.image}
             className="card-img-top"
             alt={product.name}
             style={{ height:"250px", objectFit: "cover" }}
            />

        <div className="card-body d-flex flex-column">

          <h5 className="card-title">
            {product.name}
          </h5>

          <p className="text-muted mb-1">
            {product.category}
          </p>

          <p className="card-text">
            {product.description}
          </p>

          <h5 className="mb-3">
            ₹{product.price.toLocaleString("en-IN")}
          </h5>

          <p>
            Rating :{product.rating}
          </p>

          <Link 
            to={`/products/${product.id}`}
            className="btn btn-dark mt-auto"
          > View Product

          </Link>

        </div>

      </div>

    </div>

  )
}
export default ProductCard