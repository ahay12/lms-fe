import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage'
import KategoriMateri from './components/kategoriMateri'
import HalamanMateri from './components/halamanMateri'
import Profil from './components/profil'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/kategori-materi' element={<KategoriMateri />} />
        <Route path='/materi' element={<HalamanMateri />} />
        <Route path='/profil' element={<Profil />} />
      </Routes>
    </>
  )
}

export default App
