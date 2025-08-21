import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/Contactus";
import './Components/Components.css'
import CourseDetails from "./Components/Courses/CourseDetails";
import OurCourses from "./Components/Pages/CoursePage";
import { useRef } from "react";

function App() {
const footerRef = useRef(null)

  return (
  <>
  <Router>
    <NavBar
    footer={footerRef}

    />
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contactUs" element= {<ContactUs/>} />
      <Route path="/courseDeatils" element={<CourseDetails/>} />
      <Route path="/ourCourses" element={<OurCourses/>} />
    </Routes>
      <Footer ref = {footerRef}/>
  </Router>
  
  </>
  )
}

export default App
