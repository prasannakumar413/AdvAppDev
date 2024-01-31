import { useEffect } from 'react';
import './Footer.css';
import { FiSend, FiChevronRight } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  useEffect(() => {
    // AOS initialization removed
  }, []);

  return (
    <section className="footerstart">
      
        <div className="footerbody">
       
        <div className="footercard flex">
          <div className="footerstar flex">
            <div className="logofooter">
              <a href="#" className="logof flex">
                <MdOutlineTravelExplore className="licon" />
                Buy Gift with Us
              </a>
            </div>
            <div className="footerpara">
              Gift your loved ones with our Gift Wrap website </div>
            <div className="socialfooter">
              <AiOutlineTwitter className="aicon" />
              <AiFillYoutube className="aicon" />
              <AiFillInstagram className="aicon" />
            </div>
          </div>
          <div className="footerlink grid">
            <div className="linkgroup">
              <span className="footgptitle">GIFT WRAP</span>
              <li className="footerlist1 flex">
                <FiChevronRight className="icon" />
                Products
              </li>
              <li className="footerlist1 flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerlist1 flex">
                <FiChevronRight className="icon" />
                About
              </li>
              <li className="footerlist1 flex">
                <FiChevronRight className="icon" />
                Contact
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
