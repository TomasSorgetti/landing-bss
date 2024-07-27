import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Contact from "./pages/contact/Contact"
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/productos" element={<Products />} />
        < Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
