import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section id="header">
      <div className="container">
        <div className="header__grid">
          <div className="logo__box">
            <Link onClick={scrollTo} to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="header__navbar">
            <Link onClick={scrollTo} className="nav__link" to={'/'}>Home</Link>
            <Link onClick={scrollTo} className="nav__link" to={'/books'}>Books</Link>
            <Link onClick={scrollTo} className="nav__link" to={'/best-seller-books'}>Best-seller books</Link>
            <Link onClick={scrollTo} className="nav__link" to={'/search-books'}>Search books</Link>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Header;