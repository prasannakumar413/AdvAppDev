import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./SliderImage.css";
export default function SliderImage() {
   const sliderImages = [ 
      {
         url: "https://images.pexels.com/photos/6063706/pexels-photo-6063706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
         url: "https://images.pexels.com/photos/6210157/pexels-photo-6210157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
         url: "https://images.pexels.com/photos/6102048/pexels-photo-6102048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      
   ];
   const [activeImageNum, setCurrent] = useState(0);
   const length = sliderImages.length;
   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };
   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }
   return (
      <div> <center>
         
         <h2>GIFT WRAP </h2>
         <section className = "image-slider">
            <div class = "left">
               <ArrowBackIosIcon onClick = {prevSlide} />
            </div>
            <div class="right"> 
               <ArrowForwardIosIcon onClick = {nextSlide} />
            </div>
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
                  </div>
               );
            })}
         </section></center>
      </div>
   );
}