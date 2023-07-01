import React, { useState, useEffect, useContext } from 'react'
import { API } from '../../store/StoreContext'
import { Link, useLocation } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import { CartCantext } from '../../store/CartContext'

export default function Navbar() {
  const [categories, setCategories] = useState([])
  const { cart } = useContext(CartCantext)
  const { pathname } = useLocation()
  useEffect(() => {
    fetch(API + '/products/categories')
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        setCategories(result)
      })
  }, [])

  const getPathWithotSymbols = (pathname = '') => {
    if (pathname.includes('%')) {
      const path = pathname.split('%').join('').split('20').join(' ')
      return path
    } else {
      return pathname
    }
  }

  return (
    <div className='container flex mx-auto items-center justify-between py-6'>
      <a className='text-xl font-bold' href='/'>
        Fake Store
      </a>
      <ul className='flex items-center gap-6'>
        <li>
          <Link
            className={`capitalize opacity-50 font-semibold hover:opacity-100 transition-opacity ${
              pathname === '/' ? 'opacity-100 underline' : 'opacity-50'
            }`}
            to='/'
          >
            All
          </Link>
        </li>
        {categories.map((category) => {
          return (
            <li>
              <Link
                className={`capitalize opacity-50 font-semibold hover:opacity-100 transition-opacity ${
                  getPathWithotSymbols(pathname) === `/category/${category}`
                    ? 'opacity-100 underline'
                    : 'opacity-50'
                }`}
                to={`category/${category}`}
              >
                {category}
              </Link>
            </li>
          )
        })}
        <li>
          <Link
            to='/cart'
            className='relative bg-orange-500 w-8 aspect-square inline-grid place-items-center rounded-full text-white'
          >
            <BsCart />
            <span className='absolute -top-1 -right-1 text-orange-500 bg-white border-2 border-orange-500 rounded-full w-5 h-5 text-xs grid place-items-center'>
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
