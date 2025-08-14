import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import AboutUs from "./Components/Pages/AboutUs"
import './Components/Components.css'

function App() {


  return (
  <>
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/aboutus" element={<AboutUs/>} />
    </Routes>
      <Footer/>
  </Router>
  
  </>
  )
}

export default App
