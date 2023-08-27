import { IoCallOutline, IoChatboxOutline } from 'react-icons/io5';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import foundationImg from '../assets/Foundation.webp';

const Footer = () => {
  return (
    <>
      <div className="foundation__img">
        <img src={foundationImg} alt="Foundation-img" />
      </div>
      <footer>
        <div className="footer__content">
          <p>Explore</p>
          <ul>
            <li>Our Story</li>
            <li>Track Your Order</li>
            <li>FAQs</li>
            <li>Return Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer__content">
          <p>Popular Searches</p>
          <ul>
            <li>Puppy Corner</li>
            <li>Dog Food</li>
            <li>Dog Toys</li>
            <li>Cat Food & Treats</li>
            <li>Cat Litter Supplies</li>
          </ul>
        </div>
        <div className="footer__content">
          <p>Shop Online</p>
          <ul>
            <li>Dogs</li>
            <li>Cats</li>
            <li>Consult a Vet</li>
            <li>Dog Behaviour</li>
            <li>Download app</li>
          </ul>
        </div>
        <div className="footer__content"></div>
        <div className="footer__content">
          <div>
            <div>
              <p>Get in Touch</p>
              <ul className="footer__content-contact">
                <li>
                  <span>
                    <IoCallOutline />
                  </span>
                  1800-0000-000
                </li>
                <li>
                  <span>
                    <IoChatboxOutline />
                  </span>
                  support@example.com
                </li>
              </ul>
            </div>
            <div>
              <p>Follow us</p>
              <ul className="footer__content-social">
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <AiFillYoutube />
                </li>
                <li>
                  <BiLogoFacebook />
                </li>
                <li>
                  <BiLogoLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
