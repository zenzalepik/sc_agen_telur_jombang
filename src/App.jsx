import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LocalPage from './pages/LocalPage'
import HargaTelurPage from './pages/HargaTelurPage'
import siteData from './data/data.json'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage data={siteData} />} />
      <Route path="/telur-:kecamatan" element={<LocalPage data={siteData} />} />
      <Route path="/harga-telur-jombang" element={<HargaTelurPage data={siteData} />} />
    </Routes>
  )
}
