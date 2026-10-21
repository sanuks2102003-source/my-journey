import { useNavigate } from "react-router-dom"



function Home() {

  const navigate = useNavigate()

  return(
    <div>

      <section className="bg-light py-5">

        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            Welcome to ShopZone
          </h1>

          <p className="lead">
            Find products you love at great prices. 
          </p>

          <button className="btn btn-dark"
                  onClick={() => navigate("/products")}>
            Explore Products 
          </button>

        </div>

      </section>

      <section className="container py-5">

        <div className="text-center">

          <h2>
            Why Shop With us?
          </h2>

        </div>

        <div className="row mt-4">

          <div className="col-md-4 text-center">

            <h4>Quality Products</h4>

            <p>
              Carefully selected Products For Our Customer.
            </p>

          </div>

          <div className="col-md-4 text-center">

            <h4>Easy Shopping</h4>

            <p>
              Search ,filter and purchase products easily.
            </p>

          </div>

          <div className="col-md-4 text-center">

            <h4>Secure Payment</h4>

            <p>
              simple and secure checkout experience.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}
export default Home