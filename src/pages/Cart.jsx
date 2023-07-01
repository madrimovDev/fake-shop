import React, { useContext } from 'react'
import { CartCantext } from '../store/CartContext'
import { StoreContext } from '../store/StoreContext'

export default function Cart() {
  const { cart } = useContext(CartCantext)
  const { products } = useContext(StoreContext)

  const prods = []
  const cartProds = () => {
    const cartProducts = cart.map((item) => item.products)
    for (let i = 0; i < products.length; i++) {
      const product = products[i]
      for (let j = 0; j < cartProducts.length; j++) {
        for (let t = 0; t < cartProducts[j].length; t++) {
          if (product.id === cartProducts[j][t].productId) {
            prods.push(product)
          }
        }
      }
    }
  }
  // cartProds()
  // const groups = prods.reduce((acc, current, index) => {
  //   const finded = acc.find((item) => item.id === current[index].id)
  //   console.log(finded)
  //   return acc
  // }, [])
  // console.log(groups)

  return (
    <div className='container mx-auto'>
      <h2 className='text-4xl'>Your Cart</h2>
      {cart.map((item) => {
        return (
          <div>
            <h4>{item.title}</h4>
          </div>
        )
      })}
    </div>
  )
}
