import {useState} from 'react';
import './navigation.css';

const Navigation = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuClickHandle = () => {
    setIsOpenMenu((prevValue) => !prevValue);
  }
  
  return (
    <div className="nav__wrap">
      <nav className={`nav ${isOpenMenu ? "nav--open" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item"><a href="#biography-link" className="nav__link">биография</a></li>
          <li className="nav__item"><a href="#creation-link" className="nav__link">творчество</a></li>
          <li className="nav__item"><a href="#paintings-link" className="nav__link">картины</a></li>
          <li className="nav__item"><a href="#museums-link" className="nav__link">музеи</a></li>
        </ul>
      </nav>

      <button
        className={`humburger ${isOpenMenu ? "hamburger--open" : ""}`}
        type="button"
        onClick={menuClickHandle}
      >
        <span className="visually-hidden">Открыть меню</span>
      </button>
    </div>
  )
}

export default Navigation;
