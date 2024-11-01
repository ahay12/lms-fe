import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage'
import KategoriMateri from './components/kategoriMateri'
import HalamanMateri from './components/halamanMateri'
import Profil from './components/profil'
import NotFound from './components/notFound'
import Forum from './components/forum'
import Statistik from './components/statistik'


function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/kategori-materi' element={<KategoriMateri />} />
        <Route path='/materi' element={<HalamanMateri />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/statistik' element={<Statistik />} />
      </Routes>
    </>
  )
}

export default App
