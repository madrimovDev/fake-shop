import React, { useState } from 'react'

export default function ProductCard({ product }) {
  return (
    <div className='border h-[400px] rounded-md  p-4 flex flex-col gap-2'>
      <img className='h-1/2 w-full object-contain' src={product.image} />
      <h4 className='text-lg font-bold' title={product.title}>
        {product.title.length > 30
          ? `${product.title.substring(0, 30)}...`
          : product.title}
      </h4>
      <p>{product.description.substring(0, 60)}...</p>
      <div className='flex flex-col justify-end'>
        <div>
          <span className='text-yellow-400'>&#9733;</span>
          {product.rating.rate}
        </div>
        <p className='flex flex-col justify-end font-semibold'>
          ${product.price}
        </p>
      </div>
    </div>
  )
}
