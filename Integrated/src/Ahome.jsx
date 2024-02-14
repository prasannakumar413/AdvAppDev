import React from 'react'
import './Ahome.css';
import Header from "./Header";
import List from './List';
import Slider from './Slider';
import ButtonContainer from './ButtonContainer';
//import ButtonContainer from './ButtonContainer';
import Viewgift from './Viewgift.jsx';
import Footer from './Footer.jsx';

const Ahome = () => {
  return (
    <div>
      
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
        
        
        <center>
        <h2>NEW GIFT PRODUCTS</h2></center>
       <Slider></Slider>
       
       <br></br>
      <center>
     <ButtonContainer></ButtonContainer></center> 
     <br></br><br></br>
     <br></br><br></br>
     <br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br>
      
      
      
      
      <Viewgift></Viewgift>

      <Footer></Footer>
    

    </div>
  )
}

export default Ahome;
