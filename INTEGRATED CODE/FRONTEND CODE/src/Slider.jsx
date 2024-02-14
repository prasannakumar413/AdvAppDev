import React from "react";
import ReactCardSlider from "react-card-slider-component";
import './Slider.css';

const slides = [

  
  {
    image: "https://moderngifts.in/wp-content/uploads/2023/09/Couple-Moon-Frame-600x600.jpg",
    title: "Moon Frame ",
    description: "Price: 1000"
  },
  {
    image: "https://moderngifts.in/wp-content/uploads/2023/11/PhotoRoom-20231111_121601-copy-600x600.jpg",
    title: "Friendship Love Meter ",
    description: "Price: 900"
  },
  {
    image: "https://www.khwaahish.com/wp-content/uploads/2021/12/KNA828.jpg",
    title: "Handmade Jewellery",
    description: "Price: 1200"
  }
  
];

const Slider = () => {
  return (<center>
    <div className="slider-container" style={{ marginTop: "5em" }}>
      <ReactCardSlider slides={slides}>
        {slides.map((slide, index) => (
          <center><div className="slider-item" key={index}>
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div></center>
        ))}
      </ReactCardSlider>
    </div></center>
  );
};

export default Slider;
