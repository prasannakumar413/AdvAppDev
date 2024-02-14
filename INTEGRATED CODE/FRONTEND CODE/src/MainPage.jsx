import React from 'react'
import { Link } from 'react-router-dom';


const MainPage = () => {
  return (
    <div className="A">
      
      <SliderImage />
      <div className="main-container">
        <div className="side-navigation">
        
          <button className="admin button"> <Link to="/A">ADMIN</Link> </button>
          <button className="user button"> <Link to="/U">USER</Link> </button>
          
            
              
            
            
              
           
          
        </div>

        
      </div>
    </div>
  )
}

export default MainPage


import './MainPage.css';

import SliderImage from './SliderImage';




