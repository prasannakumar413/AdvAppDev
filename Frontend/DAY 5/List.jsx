import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';


const List = () => {
  return (
    <div className="card-container">
      
      
      

      <div className="card">
        <img src="https://i.pinimg.com/736x/e2/eb/6c/e2eb6cc38b19cb521bfd309e59781801.jpg" alt="Card" />
        <div className="card-body">
        
        
        <center> <h5 className="card-title">Mug Painting</h5>
          <p className="card-text">
                                  Amount   : 500</p>
                                  <button className="btn btn-primary"> <Link to="/purchase">BUY</Link> </button></center>

        </div>
      </div>

      <div className="card">
        <img src="https://moderngifts.in/wp-content/uploads/2023/11/1-43-600x600.jpg" alt="Card" />
        <div className="card-body">
          
        <center>  <h5 className="card-title">Customized Key Chain</h5>
          <p className="card-text">
                                   Amount   : 350</p>
                                   <button className="btn btn-primary"> <Link to="/purchase">BUY</Link> </button></center>
        </div>
      </div>

      
      
      <div className="card">
        <img src="https://moderngifts.in/wp-content/uploads/2023/11/1-57-600x600.jpg" alt="Card" />
        <div className="card-body">
        <center> <h5 className="card-title">Surprise Box (30 photos)</h5>
          <p className="card-text">
                                  Amount   : 800</p>
                                  <button className="btn btn-primary"> <Link to="/purchase">BUY</Link> </button></center>
        </div>
      </div>
     

      <div className="card">
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/7/AB/IO/EV/144761041/customized-my-dad-best-collage-frame-500x500.jpg" alt="Card" />
        <div className="card-body">
        <center> <br></br> <h5 className="card-title">Customized Gift Frames</h5>
          <p className="card-text">
        
                                   Amount   : 450</p>
                                   <button className="btn btn-primary"> <Link to="/purchase">BUY</Link> </button></center>
        </div>
      </div>

      <div className="card">
      <img src="https://moderngifts.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-27-at-5.42.00-PM.jpeg-600x600.jpg" alt="Card" />
        <div className="card-body">
        <center><h5 className="card-title">Star Lamp</h5>
          <p className="card-text">
                                   Amount   : 1000</p>
                                   <button className="btn btn-primary"> <Link to="/purchase">BUY</Link> </button></center>
        </div>
      </div>


      <div className="card">
      <img src="https://everlastingmemories.in/wp-content/uploads/2022/06/rainbow-color-water-bottles-with-name-engraved.jpeg" alt="Card" />
        <div className="card-body">
        <center> <h5 className="card-title">Water Bottles</h5>
          <p className="card-text">
          <br></br>
                                   Amount   : 850</p>
                                   <button className="btn btn-primary"> <Link to="/purchase">BUY</Link> </button></center>
        </div>
      </div>
      
      <div className="card">
      <img src="https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/IMG/16115033452-350x350.jpg" alt="Card" />
        <div className="card-body">
        <center> <h5 className="card-title">Customized Pillows</h5>
          <p className="card-text"> Amount   : 900</p>
          <button className="btn btn-primary"> <Link to="/purchase">BUY</Link> </button></center>
        </div>
      </div>

     
    </div>
  );
};

export default List;
