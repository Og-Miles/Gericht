import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">

      {/* Contacts */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Conatct Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 1019, USA</p>
        <p className='p__opensans'>+ 1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      {/* Logo */}
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service to others"</p>
        <img src={images.spoon} className='spoon__img' alt="footer_spoon" style={{marginTop: '15px'}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      {/* Working Hours */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className='p__opensans'>Mon - Fri</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Sat- Sun</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2023 Gerícht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
