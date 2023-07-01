import { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext(null)
export const API = 'https://fakestoreapi.com'

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(API + '/products')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setIsLoading(false)
        setProducts(result)
      })
  }, [])

  function getProductsByCategory(categoryTitle) {
    setIsLoading(true)
    fetch(
      `${API}/products/${
        typeof categoryTitle !== 'undefined' ? 'category/' + categoryTitle : ''
      }`
    )
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setIsLoading(false)
        setProducts(result)
      })
  }

  return (
    <StoreContext.Provider
      value={{
        products,
        isLoading,
        getProductsByCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
