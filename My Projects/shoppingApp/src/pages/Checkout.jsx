import { useNavigate } from "react-router-dom"

import { useCart } from "../context/CartContext"
import { useState } from "react"


function Checkout() {

  const navigate =  useNavigate()

  const { cart , cartTotal } = useCart()

  const [formData, setFormData] = useState({

    name: "",
    email:"",
    phone:"",
    address:"",
    city:"",
    state:"",
    pincode:""

  })

  const [errors, setErrors] = useState({})
  
  function handleChange(event) {

    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }))
  }

  function validateForm() {

    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is Required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is Required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is Required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is Required"
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is Required"
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is Required"
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is Required"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  function handleSubmit (event) {

    event.preventDefault()

    const isValid = validateForm()

    if(!isValid) {
      return
    }

    navigate("/payment")

  }

  if (cart.length === 0) {

    return (

      <div className="container py-5 text-center">

        <h2>
          Your Cart is Empty...
        </h2>

        <p className="text-muted">
          Add Products Before proceeding to Checkout.
        </p>

        <button 
              className="btn btn-dark"
              onClick={() => navigate("/products")}
              >
          Continue Shopping
        </button>

      </div>
    )

  }


  return(
    
    <div className="container py-5">

      <h1 className="mb-4">
        Checkout
      </h1>

      <div className="row">

        {/* form */}

        <div className="col-lg-8">

          <div className="card">

            <div className="card-body">

              <h4 className="mb-4">
                Customer Details
              </h4>

              <form onClick={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Full Name
                  </label>

                  <input 
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />

                    {errors.name && (
                      <small className="text-danger">
                        {errors.name}
                      </small>
                    )}

                </div>

                {/* email */}

                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input 
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                   />

                   {errors.email && (
                    <small className="text-danger">
                      {errors.email}
                    </small>
                   )}

                </div>

                {/* phone */}

                <div className="mb-3">

                  <label className="form-label">
                    Phone
                  </label>

                  <input 
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                    />

                    {errors.phone && (
                      <small className="text-danger">
                        {errors.phone}
                      </small>
                    )}

                </div>

                <h4 className="mt-4 mb-4">
                  Delivery Address
                </h4>

                {/* Address */}

                <div className="mb-3">

                  <label className="form-label">
                    Address
                  </label>

                  <textarea 
                        className="form-control"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Your Delivery Address"
                      />
                  

                      {errors.address && (
                        <small className="text-danger">
                          {errors.address}
                        </small>
                      )}

                </div>


                <div className="row">

                  {/* city */}

                  <div className="col-md-4 mb-3">

                    <label className="form-label">
                      City
                    </label>

                    <input 
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                      />

                      {errors.city && (
                        <small className="text-danger">
                            {errors.city}
                        </small>
                      )}

                  </div>

                  {/* state */}

                  <div className="col-md-4 mb-3">

                    <label className="form-label">
                      State
                    </label>

                    <input 
                        type="text"
                        name="state"
                        className="form-control"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                      />

                      {errors.state && (
                        <small className="text-danger">
                            {errors.state}
                        </small>
                      )}

                  </div>

                  {/* pincode */}

                  <div className="col-md-4 mb-3">

                    <label className="form-label">
                      Pincode
                    </label>

                    <input 
                        type="text"
                        name="pincode"
                        className="form-control"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Enter your pincode"
                      />

                      {errors.pincode && (
                        <small className="text-danger">
                            {errors.pincode}
                        </small>
                      )}

                  </div>

                </div>


                <button 
                      type="submit"
                      className="btn btn-dark w-100 mt-3"
                    >
                  Continue to payment
                </button>



                

              </form>

            </div>

          </div>

        </div>

        {/* order summary */}

        <div className="col-lg-4">

          <div className="card">

            <div className="card-body">

              <h4>
                Order Summary
              </h4>

              <hr />

              {cart.map((item) => (

                <div key={item.id}
                     className="d-flex justify-content-between mb-3"
                    >

                      <div>

                        <strong>
                          {item.name}
                        </strong>

                        <br />

                        <small className="text-muted">
                          Quantity: {item.quantity}
                        </small>

                      </div>

                      <span>
                        ₹{(
                          item.price * item.quantity
                        ).toLocaleString("en-IN")}
                      </span>

                </div>

              ))}

              <hr />

              <div className="d-flex justify-content-between">

                <strong>
                  Total
                </strong>

                <strong>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}
export default Checkout