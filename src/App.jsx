// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Category from './components/category'
import Footer from './components/footer'
import Hero from './components/hero'
import Materi from './components/materi'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Materi />
      <Footer />
    </>
  )
}

export default App
