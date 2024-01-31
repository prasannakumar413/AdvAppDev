
import React from "react";
import './App.css';
import LoginForm from "./Login";
import RegistrationForm from "./SignUp";
import Ahome from "./Ahome";
import Post from './components/Post.jsx';
import Management from "./components/Management.jsx";
import Uhome from "./Uhome.jsx";
//import PPost from "./PPost.jsx";
import AboutUs from "./AboutUs.jsx";
import Services from "./Services.jsx";
import Contact from  "./Contact.jsx";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
      
       <Route path="/" element={<MainPage/>} /> 
       <Route path="/A" element={<RegistrationForm />} />
       <Route path="/A" element={<LoginForm />} />
       <Route path="/Ahome" element={<Ahome />} />
       <Route path="/Aaddgift" element={<Post/>} />
       <Route path="/Aviewgift" element={<Management/>} />
       <Route path="/Uhome" element={<Uhome/>} />
       
       <Route path="/aboutus" element={<AboutUs/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/contact" element={<Contact/>} />

       
       
       
       
      
        
      </Routes>
    </Router>
  );
};

export default App;


/*<Route path="/navbar" element={<Navbar />} />
  <Route path="/adminhome" element={<AdminHome />} />     */
 /*<Route path="/services" element={<Services/>} />
       <Route path="/contact" element={<Contact/>} />*/
