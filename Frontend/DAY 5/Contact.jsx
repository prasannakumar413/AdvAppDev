import React from 'react';
import './Contact.css';
 // Import your image here

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="image-container">
      <img src="https://images.pexels.com/photos/2072148/pexels-photo-2072148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About Us" className="about-us-image" />
      </div>
      <div className="text-container">
        <h2>Contact Us</h2>
       <p>
       Contact Us at Gift Wrap</p><br></br>
       <p>
Thank you for choosing Gift Wrap for all your gifting needs! We value your feedback, inquiries, and suggestions. Here's how you can get in touch with us:
</p><br></br>
<p>
Customer Support:
If you have any questions about our products, orders, or services, our dedicated customer support team is here to assist you. Feel free to reach out via email at support@giftwrap.com or give us a call at +1 (800) GIFT-WRP.
</p><br></br>
<p>
Business Inquiries:
For partnerships, collaborations, or business-related queries, please email us at business@giftwrap.com. We're always looking for exciting opportunities to work together.
</p><br></br>
<p>
Feedback and Suggestions:
Your feedback is important to us! If you have any suggestions, comments, or ideas to share, please email us at feedback@giftwrap.com. We appreciate hearing from you and strive to continuously improve our services.
</p><br></br>
<p>
Social Media:
Stay connected with us on social media for the latest updates, promotions, and gift inspirations. Follow us on Facebook, Twitter, and Instagram @giftwrapofficial.
</p><br></br>
<p>
Visit Us:
If you prefer face-to-face interactions, you're welcome to visit our headquarters located at:
123 Gift Street,
Cityville, State, ZIP
</p><br></br>
<p>
Thank you for being a part of the Gift Wrap family. We look forward to serving you and making your gifting experience memorable!
    </p>  
      </div>
    </div>
  );
};

export default Contact;
