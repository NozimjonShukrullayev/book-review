import { FaSearch } from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import "./Media-menu.css";
import { Link } from "react-router-dom";

function MediaMenu() {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  }; 

  return (
    <nav className={`media__menu`}>
      <div className="container media__menu__grid">
        <Link onClick={scrollTo} className="menu__link" to={'/'}><IoHome /> <span>Home</span></Link>
        <Link onClick={scrollTo} className="menu__link" to={'/books'}><ImBooks /> <span>Books</span></Link>
        <Link onClick={scrollTo} className="menu__link" to={"/best-seller-books"}><BiSolidBookReader /> <span>Best-seller books</span></Link>
        <Link onClick={scrollTo} className="menu__link" to={'/search-books'}><FaSearch /> <span>Search books</span></Link>
      </div>
    </nav>
  )
}

export default MediaMenu;