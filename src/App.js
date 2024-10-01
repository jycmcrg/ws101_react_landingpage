import Navbar from './Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './pages/Footer/Footer'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
  <>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
  <Footer />
  </>
  )
}

export default App;