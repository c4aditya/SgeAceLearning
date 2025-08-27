import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import TermAndCondition from "./Components/Pages/TermAndCondition";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/Contactus";
import './Components/Components.css'
import CourseDetails from "./Components/Courses/CourseDetails";
import OurCourses from "./Components/Pages/CoursePage";
import { useRef } from "react";
import ApplicationForm from "./Components/Pages/ApplicationFromPage";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
const footerRef = useRef(null)

  return (
  <>
  <Router>

    <ScrollToTop/>

    <NavBar
    footer={footerRef}

    />
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contactUs" element= {<ContactUs/>} />
      <Route path="/courseDeatils" element={<CourseDetails/>} />
      <Route path="/ourCourses" element={<OurCourses/>} />
      <Route path="/applicationForm" element={<ApplicationForm/>} />
      <Route path="/termAndCondition" element={<TermAndCondition/>} />
    </Routes>
      <Footer ref = {footerRef}/>
  </Router>
  
  </>
  )
}

export default App
