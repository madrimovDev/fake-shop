import { createContext, useEffect, useState } from 'react'
import { API } from './StoreContext'

export const CartCantext = createContext(null)

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(API + '/carts?userId=1')
      .then((response) => response.json())
      .then((result) => {
        setCart(result)
        setIsLoading(false)
      })
  }, [])

  return (
    <CartCantext.Provider
      value={{
        cart,
        isLoading,
      }}
    >
      {children}
    </CartCantext.Provider>
  )
}
