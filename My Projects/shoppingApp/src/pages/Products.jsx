import axios from "axios"
import { useEffect, useState } from "react"

import ProductCard from "../components/ProductCard"


function Products() {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)
  
  const [error, setError] = useState("")

  const [search, setSearch] = useState("")

  const [category, setCategory] = useState("ALL")

  const [sort, setSort] = useState("")


  useEffect(() => {

    axios.get("http://localhost:3000/products")
    .then((response) => {
      setProducts(response.data)
    })

    .catch(() => {

      setError("Failed to load Products")

    })

    .finally(() => {

      setLoading(false)

    })


  }, [])

  const categories = [
    "ALL",
    ...new Set(products.map((product) => product.category))
  ]

  let filteredProducts = products.filter((product) => {

    const matchesSearch = 
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())


    const matchesCategory = 
        category === "ALL" ||
        product.category === category


        return matchesSearch && matchesCategory
  })

  if (sort === "low") {

    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    )
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    )
  }

  function clearFilters() {

    setSearch("")
    setCategory("ALL")
    setSort("")
  }

  if (loading) {

    return (
      <div className="container py-5 text-center">

        <h3>
          Loading Products...
        </h3>

      </div>

    )
  }

  if (error) {

    return(

      <div className="container py-5 text-center">

        <h3 className="text-danger">
          {error}
        </h3>

      </div>

    )
  }
  
  return (

    <div className="container py-5">

      <h1 className="mb-4">
        Our Products
      </h1>


      {/* Search */}

      <div className="row mb-4">

        <div className="col-md-5">

          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(event) =>
            setSearch(event.target.value)
            }
          />

        </div>


        {/* Category */}

        <div className="col-md-3">

          <select
            className="form-select"
            value={category}
            onChange={(event) =>
            setCategory(event.target.value)
            }
          >

            {categories.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>


        {/* Sort */}

        <div className="col-md-3">

          <select
            className="form-select"
            value={sort}
            onChange={(event) =>
            setSort(event.target.value)
            }
          >

            <option value="">
              Sort By
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

          </select>

        </div>


        {/* Clear */}

        <div className="col-md-1">

          <button
            className="btn btn-outline-danger"
            onClick={clearFilters}
          >
            Clear
          </button>

        </div>

      </div>


      {/* Product count */}

      <p className="text-muted">

        {filteredProducts.length} products found

      </p>


      {/* Products */}

      <div className="row">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

        ) : (

          <div className="text-center py-5">

            <h3>
              No products found
            </h3>

            <p className="text-muted">
              Try changing your search or filters.
            </p>

          </div>

        )}

      </div>

    </div>

  )
}

export default Products