import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext()

function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart")

    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(product) {

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (item) => item.id === product.id)

        if(existingProduct) {

          return previousCart.map((item) => 
          
              item.id === product.id 
                
                ? {
                  ...item,
                  quantity : item.quantity + 1
                }

              : item
            )
        }

        return [
          ...previousCart,
          {
            ...product,
            quantity: 1
          }
        ]
    })

  }

  function increaseQuantity(id) {

    setCart((previousCart) =>
    
    previousCart.map((item) => 
    
    item.id === id
  
    ? {
      ...item,
      quantity : item.quantity + 1
    }
    : item
    )
  )
}

function decreaseQuantity(id) {

  setCart((previousCart) => 

    previousCart.map((item) => 
    
      item.id === id
    
      ? {
        ...item,
        quantity: item.quantity - 1
      }
      
    : item 
  
  )

  .filter((item) => item.quantity > 0)

    )
  }

  function removeFromCart(id) {

    setCart((previousCart) => 
    
    previousCart.filter(
      (item) => item.id !== id

     )

    )

  }

  function clearCart() {

    setCart([])
  }


  const cartItemCount = cart.reduce(

    (total, item) => total + item.quantity,

    0
  )

  const cartTotal = cart.reduce(

    (total, item) =>

      total + item.price * item.quantity,

      0
  )

  return(

    <CartContext.Provider
    
    value={{

      cart,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      addToCart,
      clearCart,
      cartItemCount,
      cartTotal

    }}

    >
      {children}

    </CartContext.Provider>
  )
}

export function useCart() {

  return useContext(CartContext)
}

export default CartProvider

