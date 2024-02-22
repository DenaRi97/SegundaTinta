import './footer.css';

import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/x-twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
//import copyright from '../../assets/icons/copyright.svg'


const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className="footer-copyright" >
           
            <p> &copy;Todos los derechos reservados - Segunda Tinta</p>
        </div>

        <div className="footer-icons">
            <div className='icons'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
                </a>
            </div>

            <div className='icons'>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" />
                </a>
            </div>

            <div className='icons'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
                </a>
            </div>
        </div>
    </div>
    </>


  );
};

export default Footer;