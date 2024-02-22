import './footer.css';

import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/x-twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import copyright from '../../assets/icons/copyright.svg'


const Footer = () => {
  return (

  <Footer>
    <>
    <div className="footer-copyright" >

       <img src={copyright} alt="Copyright" />
        <p>Todos los derechos reservados - Segunda Tinta</p>
    </div>

    <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>

        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
    </div>
    </>
</Footer>

  );
};

export default Footer;