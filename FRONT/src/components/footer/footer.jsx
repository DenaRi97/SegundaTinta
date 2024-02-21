import React from 'react';
import './footer.css';

import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/x-twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';


const Footer = () => {
  return (

  <FooterContainer>
    <div className="footer-copyright" />
       <img src={Copyright} alt="Copyright" />
        <p>Todos los derechos reservados - Segunda Tinta</p>
    </div>

    <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>

        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>

    </div>
</FooterContainer>
  );
};

export default Footer;