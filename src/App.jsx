import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/productos" element={<h1>Productos</h1>} />
        < Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </>
  )
}

export default App
