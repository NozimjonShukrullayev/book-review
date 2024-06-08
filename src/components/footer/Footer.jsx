import { Link } from "react-router-dom";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import footerLogo from "../../assets/images/logo.png";
import "./Footer.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendToTelegramBot } from "../../slice/footer-subscribe-slice";

function Footer() {
  const dispatch = useDispatch();
  const { success, isLoading } = useSelector(state => state.subscribe)
  const [email, setEmail] = useState('');

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  }

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const sendToTelegram = (e) => {
    e.preventDefault();
    dispatch(sendToTelegramBot(email));
    if (success.ok) {
      alert(`Data has been sended`);
    }
    setEmail("");
  }

  return (
    <div id="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand__info">
          <Link onClick={scrollTo} to={"/"}>
            <img src={footerLogo} alt="logo-img" />
          </Link>
          <p className="brand__description">when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
          <div className="footer__social__media">
            <a href="https://www.facebook.com/nozim.shukrullayev" target={"_blank"}><span><FaFacebookF className="footer__social" /></span></a>
            <a className="social__media" href="https://t.me/N_Shukrullayev" target={"_blank"}><span><FaTelegramPlane className="footer__social" /></span></a>
            <a className="social__media" href="https://www.instagram.com/shukrullayev_nozim/" target={"_blank"}><span><FaInstagram className="footer__social" /></span></a>
          </div>
        </div>
        <div className="footer__links">
          <h4>Links</h4>
          <ul>
            <li><Link onClick={scrollTo} className="footer__link" to={"/"}>Home</Link></li>
            <li><Link onClick={scrollTo} className="footer__link" to={"/books"}>Books</Link></li>
            <li><Link onClick={scrollTo} className="footer__link" to={"/best-seller-books"}>Best-seller books</Link></li>
            <li><Link onClick={scrollTo} className="footer__link" to={"/search-books"}>Search books</Link></li>
          </ul>
        </div>
        <div className="footer__services">
          <h4>Subscribe Newsletter</h4>
          <p>Known printer took galley type and scrambled it to make.</p>
          <form action="#" id="footer-form" onSubmit={sendToTelegram}>
            <div className="footer__email__input">
              <input type="email" placeholder="Enter your email" value={email} required onChange={changeEmailHandler} name="email" id="email" />
              <button type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer__copyright__terms">
        <div className="copyright">
          <p>Copyright © 2023 Books.uz. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer;