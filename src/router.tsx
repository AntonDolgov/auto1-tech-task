import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, Page404, Product } from './pages'

export const Router = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/404" />} />

    <Route path="/" element={<HomePage />} />

    <Route path="/404" element={<Page404 />} />

    <Route path="/product" element={<Product />}>
      <Route path=":id" element={<Product />} />
    </Route>
  </Routes>
)
