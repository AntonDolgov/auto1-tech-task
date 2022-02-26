import { Routes, Route } from 'react-router-dom'
import { HomePage, Page404, Product } from './pages'

export const Router = () => (
  <Routes>
    <Route path="*" element={<Page404 />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/product" element={<Product />} />
  </Routes>
)
