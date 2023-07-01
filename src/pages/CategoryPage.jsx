import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../store/StoreContext'
import ProductCard from '../components/ProductCard/ProductCard'
import Banner from '../components/banner/Banner'

export default function CategoryPage() {
  const { categoryTitle } = useParams()
  const { products, getProductsByCategory, isLoading } =
    useContext(StoreContext)

  useEffect(() => {
    getProductsByCategory(categoryTitle)
  }, [categoryTitle])

  if (isLoading) {
    return (
      <div className='container mx-auto grid grid-cols-5 gap-12'>
        <div className='border h-[400px] rounded-md  p-4 flex flex-col gap-2 bg-stone-200 animate-pulse'></div>
        <div className='border h-[400px] rounded-md  p-4 flex flex-col gap-2 bg-stone-200 animate-pulse'></div>
        <div className='border h-[400px] rounded-md  p-4 flex flex-col gap-2 bg-stone-200 animate-pulse'></div>
        <div className='border h-[400px] rounded-md  p-4 flex flex-col gap-2 bg-stone-200 animate-pulse'></div>
        <div className='border h-[400px] rounded-md  p-4 flex flex-col gap-2 bg-stone-200 animate-pulse'></div>
      </div>
    )
  }

  return (
    <>
      <Banner />
      <div className='container mx-auto grid grid-cols-5 gap-12'>
        {products.map((product) => {
          return <ProductCard product={product} />
        })}
      </div>
    </>
  )
}
