import React, { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

export default function ProgressBar() {
  const { isLoading } = useContext(StoreContext)

  return (
    <div
      className={`h-1 bg-blue-500  transition-all origin-top-left ${
        isLoading ? 'scale-x-100' : 'scale-x-0'
      }`}
    ></div>
  )
}
