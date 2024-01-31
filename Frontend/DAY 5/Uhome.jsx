import React from 'react'
import './Ahome.css';
import Header from "./Header";
import List from './List';
import Slider from './Slider';
import UButtonContainer from './UButtonContainer';
//import ButtonContainer from './ButtonContainer';
import Footer from './Footer';


const Uhome = () => {
  return (
    <div>
      
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
        <br></br>
        
        <center>
        <h2>NEW GIFT PRODUCTS</h2></center>
       <Slider></Slider>
       
       <br></br>
       
     <center><UButtonContainer></UButtonContainer></center>
     <br></br><br></br>
       <br></br><br></br>
       <br></br>
     <br></br><br></br>
       <br></br><br></br>
       <br></br>
     <br></br><br></br>
       <br></br><br></br>
       <br></br>
      
      
      
      
      <List></List>

      
    <Footer></Footer>

    </div>
  )
}

export default Uhome;
