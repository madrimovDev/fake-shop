import React, { useState, useEffect } from 'react'
import { API } from '../../store/StoreContext'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [categories, setCategories] = useState([])
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
      <ul className='flex gap-6'>
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
      </ul>
    </div>
  )
}
