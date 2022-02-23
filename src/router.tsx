import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages'

export const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
)
