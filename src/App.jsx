import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        < Route path="/" element={<h1>Inicio</h1>} />
        < Route path="/productos" element={<h1>Productos</h1>} />
        < Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </>
  )
}

export default App
