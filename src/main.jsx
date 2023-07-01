import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StoreProvider } from './store/StoreContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './store/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
)
