import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Left side: Image */}
      <div className="image-container">
        <img src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About Us" className="about-us-image" />
      </div>
      
      {/* Right side: Text */}
      <div className="text-container">
        <h2>About Us</h2>
        <p>
        Welcome to Gift Wrap!
        </p><p><br></br>
At Gift Wrap, we believe in the joy of giving. Our mission is to provide you with an unforgettable gifting experience, whether it's for a special occasion or just to brighten someone's day. We offer a curated selection of unique gifts, carefully chosen to delight and inspire.
</p><p><br></br>
With a focus on quality, creativity, and convenience, Gift Wrap strives to make every gift-giving moment memorable. Our team is dedicated to helping you find the perfect gift, no matter the recipient or the occasion.
</p><p><br></br>
Founded with a passion for spreading happiness, Gift Wrap is more than just a gift shop — it's a destination for thoughtful gestures and heartfelt expressions. Join us in celebrating the art of giving and make every moment unforgettable with Gift Wrap.
</p><p><br></br>
Thank you for choosing Gift Wrap, where every gift tells a story.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
