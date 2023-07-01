import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import CategoryPage from './pages/CategoryPage'
import ProgressBar from './components/progress/ProgressBar'
import Banner from './components/banner/Banner'

function App() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <Banner />
      <Routes>
        <Route path='/' element={<CategoryPage />} />
        <Route path='category/:categoryTitle' element={<CategoryPage />} />
      </Routes>
    </>
  )
}

export default App
