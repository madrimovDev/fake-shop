import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import CategoryPage from './pages/CategoryPage'
import ProgressBar from './components/progress/ProgressBar'
import Banner from './components/banner/Banner'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<CategoryPage />} />
        <Route path='/category/:categoryTitle' element={<CategoryPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
